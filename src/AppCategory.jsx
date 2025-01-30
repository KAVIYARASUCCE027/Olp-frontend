import React from "react";
import { Link } from 'react-router-dom';


const AppCategory = () => {
  return (
    <div className="category-page">
      <h1>Explore Categories</h1>
      <div className="category-grid">


        <div className="category-card">
         <Link to="/blockchain">
  <img
    src="./bc.jpeg"
    alt="Blockchain Image"
    className="category-image"
  />
  <h3 className="category-title">Blockchain</h3>
</Link>
        </div>

        <div className="category-card">
          <Link to="/cloud">
            <img
              src="./aws.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Cloud Computing</h3>
          </Link>
        </div>

        <div className="category-card">
          <Link to="/Data Science">
            <img
              src="./Data Science.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Data Science</h3>
          </Link>
        </div>

        <div className="category-card">
          <Link to="/cloud">
            <img
              src="./cyber.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">CyberSecurity</h3>
          </Link>
        </div>

        <div className="category-card">
          <Link to="/cloud">
            <img
              src="./aws.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Cloud Computing (aws)</h3>
          </Link>
        </div>


        <div className="category-card">
          <Link to="/blockchain">
            <img
              src="./bc.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Blockchain</h3>
          </Link>
        </div>


        <div className="category-card">
          <Link to="/cloud">
            <img
              src="./Data Science.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Data Science</h3>
          </Link>
        </div>



        <div className="category-card">
          <Link to="/cloud">
            <img
              src="./iot.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">IOT</h3>
          </Link>
        </div>

        


        
      </div>
     
    </div>

    
  );
};

export default AppCategory;
