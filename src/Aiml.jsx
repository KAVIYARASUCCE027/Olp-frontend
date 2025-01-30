import React from "react";
import "./Aiml.css";

const Aiml = () => {
  const courses = [
    {
      id: 1,
      title: "Machine Learning Basics",
      description: "Learn the fundamentals of machine learning algorithms.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Deep Learning",
      description: "Dive deep into neural networks and deep learning concepts.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Natural Language Processing",
      description: "Explore language processing with AI technologies.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const tutors = [
    { name: "Alice Johnson", email: "alice.johnson@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
  ];

  return (
    <div className="container">
      <h1 className="heading">AI/ML Courses</h1>

      <div className="courses">
        {courses.map((course) => (
          <div key={course.id} className="card">
            <img src={course.image} alt={course.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{course.title}</h2>
              <p className="card-description">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <h2 className="footer-heading">Contact Our Tutors</h2>
        <ul className="tutors-list">
          {tutors.map((tutor, index) => (
            <li key={index} className="tutor-item">
              {tutor.name} - <a href={`mailto:${tutor.email}`}>{tutor.email}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Aiml;
