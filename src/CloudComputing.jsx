import React from "react";
import "./CloudComputing.css";

const CloudComputing = () => {
  return (
    <div className="container">
      <h1 className="heading">Cloud Computing Courses</h1>

      <div className="courses">
        {/* Course 1 */}
        <div className="card">
          <img
            src="./meta.jpeg"
            alt="Cloud Fundamentals"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Cloud Fundamentals</h2>
            <p className="card-description">
              Learn the basics of cloud computing and its architecture.
            </p>
          </div>
        </div>

        {/* Course 2 */}
        <div className="card">
          <img
            src="./aws.jpeg"
            alt="AWS Solutions Architect"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">AWS Solutions Architect</h2>
            <p className="card-description">
              Master AWS services and build scalable solutions.
            </p>
          </div>
        </div>

        {/* Course 3 */}
        <div className="card">
          <img
            src="./aws.jpeg"
            alt="Microsoft Azure Essentials"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Microsoft Azure Essentials</h2>
            <p className="card-description">
              Build, manage, and deploy applications on Azure.
            </p>
          </div>
        </div>

        {/* Course 4 */}
        <div className="card">
          <img
            src="./google.jpeg"
            alt="Google Cloud Platform"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Google Cloud Platform</h2>
            <p className="card-description">
              Get hands-on experience with Google Cloud technologies.
            </p>
          </div>
        </div>

        {/* Course 5 */}
        <div className="card">
          <img
            src="./meta.jpeg"
            alt="DevOps on Cloud"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">DevOps on Cloud</h2>
            <p className="card-description">
              Learn how to implement DevOps practices in the cloud.
            </p>
          </div>
        </div>

        {/* Course 6 */}
        <div className="card">
          <img
            src="./aws.jpeg"
            alt="Cloud Security"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Cloud Security</h2>
            <p className="card-description">
              Understand how to secure cloud infrastructure and data.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="./aws.jpeg"
            alt="Cloud Security"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Cloud Security</h2>
            <p className="card-description">
              Understand how to secure cloud infrastructure and data.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="./aws.jpeg"
            alt="Cloud Security"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Cloud Security</h2>
            <p className="card-description">
              Understand how to secure cloud infrastructure and data.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="./aws.jpeg"
            alt="Cloud Security"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Cloud Security</h2>
            <p className="card-description">
              Understand how to secure cloud infrastructure and data.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="./aws.jpeg"
            alt="Cloud Security"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Cloud Security</h2>
            <p className="card-description">
              Understand how to secure cloud infrastructure and data.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="./aws.jpeg"
            alt="Cloud Security"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Cloud Security</h2>
            <p className="card-description">
              Understand how to secure cloud infrastructure and data.
            </p>
          </div>
        </div>

        {/* Course 7 */}
        <div className="card">
          <img
            src="./aws.jpeg"
            alt="Kubernetes in the Cloud"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Kubernetes in the Cloud</h2>
            <p className="card-description">
              Deploy, manage, and scale applications using Kubernetes.
            </p>
            <button className="btn2">Enroll</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h2 className="footer-heading">Contact Our Tutors</h2>
        <ul className="tutors-list">
          {/* Tutor 1 */}
          <li className="tutor-item">
            Emily Davis - <a href="mailto:emily.davis@example.com">emily.davis@example.com</a>
          </li>

          {/* Tutor 2 */}
          <li className="tutor-item">
            John Wilson - <a href="mailto:john.wilson@example.com">john.wilson@example.com</a>
          </li>

          {/* Tutor 3 */}
          <li className="tutor-item">
            Sarah Thompson -{" "}
            <a href="mailto:sarah.thompson@example.com">sarah.thompson@example.com</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default CloudComputing;