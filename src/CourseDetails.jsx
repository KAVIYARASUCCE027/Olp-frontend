import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams(); // Get course ID from URL

  return (
    <div>
      <h1>Course Details</h1>
      <p>
        Welcome to the details page for <strong>Course {id}</strong>.
      </p>
    </div>
  );
};

export default CourseDetails;
