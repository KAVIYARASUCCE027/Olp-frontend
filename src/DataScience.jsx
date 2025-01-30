import React from "react";
import "./DataScience.css";

const courses = [
  {
    id: 1,
    title: "Data Analysis with Python",
    description: "Learn to analyze data with Python libraries like Pandas.",
    image: "src/google.jpeg", // Ensure the path is correctly resolved
  },
  {
    id: 2,
    title: "Data Visualization",
    description: "Explore data visualization using tools like Matplotlib.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Big Data Technologies",
    description: "Understand big data tools and frameworks like Hadoop.",
    image: "https://via.placeholder.com/150",
  },
];

const tutors = [
  { name: "Eve Davis", email: "eve.davis@example.com" },
  { name: "Frank Harris", email: "frank.harris@example.com" },
];

const CourseCard = ({ course }) => (
  <div className="card">
    <img src={course.image} alt={course.title} className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{course.title}</h2>
      <p className="card-description">{course.description}</p>
    </div>
  </div>
);

const TutorContact = ({ tutor }) => (
  <li className="tutor-item">
    {tutor.name} - <a href={`mailto:${tutor.email}`}>{tutor.email}</a>
  </li>
);

const DataScience = () => {
  return (
    <div className="container">
      <header>
        <h1 className="heading">Data Science Courses</h1>
      </header>

      <section className="courses">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>

      <footer className="footer">
        <h2 className="footer-heading">Contact Our Tutors</h2>
        <ul className="tutors-list">
          {tutors.map((tutor, index) => (
            <TutorContact key={index} tutor={tutor} />
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default DataScience;
