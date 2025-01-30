import React from "react";
import "./WebDevelopment.css";

const Webdevelopment = () => {
  const courses = [
    {
      id: 1,
      title: "Front-End Web Development",
      description: "Learn HTML, CSS, and JavaScript for building web pages.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Back-End Development",
      description: "Master server-side technologies like Node.js and Express.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Full-Stack Web Development",
      description: "Combine front-end and back-end skills to build full-stack apps.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const tutors = [
    { name: "Grace Lee", email: "grace.lee@example.com" },
    { name: "Henry Kim", email: "henry.kim@example.com" },
  ];

  return (
    <div className="container">
      <h1 className="heading">Web Development Courses</h1>

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

export default Webdevelopment;
