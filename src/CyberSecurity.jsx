import React from "react";
import "./CyberSecurity.css";

const CyberSecurity = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      description: "Learn the basics of cybersecurity and threat management.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Network Security",
      description: "Understand how to secure networks from cyber threats.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Ethical Hacking",
      description: "Explore ethical hacking and penetration testing techniques.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const tutors = [
    { name: "Charlie Brown", email: "charlie.brown@example.com" },
    { name: "Dave Lee", email: "dave.lee@example.com" },
  ];

  return (
    <div className="container">
      <h1 className="heading">Cybersecurity Courses</h1>

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

export default CyberSecurity;
