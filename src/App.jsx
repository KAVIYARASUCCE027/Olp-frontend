import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NewCourseForm from "./NewCourseForm";
import cors from 'cors'
import CourseList from "./CourseList";
import { Route,Routes } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get("https://onlinelearningplatform-2.onrender.com/api/courses");
      setCourses(response.data);
    };
    fetchCourses();
  }, []);

  const addCourse = async (title, description, category, price) => {
    const response = await axios.post("https://onlinelearningplatform-2.onrender.com/api/courses", {
      title,
      description,
      category,
      price,
    });
    setCourses((prevCourses) => [...prevCourses, response.data]);
  };

  const removeCourse = async (id) => {
    await axios.delete(`https://onlinelearningplatform-2.onrender.com/api/courses/${id}`);
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  

 

  return (
    <div>
     



      {/* Hero Section */}
      <div className="hero-section">
        <h1>Learn from the world’s best instructors</h1>
      </div>





          {/*  course with Backend */}

     <div className="container">
      <h3>Course Management</h3>
      <CourseList courses={courses} removeCourse={removeCourse} />
      <NewCourseForm addCourse={addCourse} />
    </div>






      {/* Categories */}
      <div className="categories">
        <h2>Top Categories</h2>
        <div className="categories-grid">
          {["Development", "Business Analytics", "Finance", "Design", "Marketing", "AIML"].map((category) => (
            <div key={category} className="category-card">
              <p>{category}</p>
            </div>
          ))}
        </div>
      </div>





      {/* Trusted Section */}
      <div className="trusted-section">
        <p>Trusted by over 16,000 companies and millions of learners around the world</p>
        <div className="logo-container">
          {["volks.jpeg", "Samsung.jpeg", "lg.jpeg", "aws.jpeg", "google.jpeg", "meta.jpeg", "tesla.jpeg", "nvidia.jpeg"].map((logo) => (
            <img key={logo} src={`src/${logo}`} alt={logo.split(".")[0]} />
          ))}
        </div>
      </div>




      {/* Footer */}
      <footer className="footer">
        {[
          { title: "Web Development", content: "JavaScript | React JS | Angular | Java" },
          { title: "IT Certifications", content: "Amazon AWS | AWS Certified Cloud Practitioner | Azure Fundamentals" },
          { title: "Leadership", content: "Management Skills | Project Management" },
          { title: "Certifications by Skill", content: "Cybersecurity | Project Management | Data Analytics" },
          { title: "Data Science", content: "Python | Machine Learning | Deep Learning" },
          { title: "Communication", content: "Presentation Skills | Public Speaking" },
          { title: "Business Analytics", content: "Microsoft Excel | SQL | Data Analysis" },
          { title: "About", content: "About us | Careers | Contact us" },
          { title: "Discovery OLP", content: "Get the app | Teach on OLP | Help and Support" },
          { title: "Udemy Business", content: "Legal & Accessibility | Privacy policy | Terms" }
        ].map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <p>{section.content}</p>
          </div>
        ))}
        <div className="copyright-bar">
          <p>&copy; 2025 OLP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
