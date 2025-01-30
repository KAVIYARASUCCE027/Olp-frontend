import React, { useState } from "react";
import "./CourseList.css";
import { useNavigate } from "react-router";

const CourseList = ({ courses, removeCourse }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-list-container">
      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search courses by title, category, or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="course-list">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>{course.category}</p>
            <p>${course.price}</p>
            <button className="btn1" onClick={() => removeCourse(course.id)}>Delete</button>
            <button className="btn2" onClick={() => navigate("/pay")}>Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
