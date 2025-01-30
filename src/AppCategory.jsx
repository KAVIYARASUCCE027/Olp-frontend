import React from "react";

const AppCategory = () => {
  return (
    <div className="category-page">
      <h1>Explore Categories</h1>
      <div className="category-grid">


        <div className="category-card">
          <a href="/blockchain">
            <img
              src="./bc.jpeg"
              alt="Blockchain Image"
              className="category-image"
            />
            <h3 className="category-title">Blockchain</h3>
          </a>
        </div>

        <div className="category-card">
          <a href="/cloud">
            <img
              src="./aws.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Cloud Computing</h3>
          </a>
        </div>

        <div className="category-card">
          <a href="/cloud">
            <img
              src="./Data Science.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Data Science</h3>
          </a>
        </div>

        <div className="category-card">
          <a href="/cloud">
            <img
              src="./cyber.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">CyberSecurity</h3>
          </a>
        </div>

        <div className="category-card">
          <a href="/cloud">
            <img
              src="./aws.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Cloud Computing (aws)</h3>
          </a>
        </div>


        <div className="category-card">
          <a href="/blockchain">
            <img
              src="./bc.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Blockchain</h3>
          </a>
        </div>


        <div className="category-card">
          <a href="/cloud">
            <img
              src="./Data Science.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">Data Science</h3>
          </a>
        </div>



        <div className="category-card">
          <a href="/cloud">
            <img
              src="./iot.jpeg"
              alt="Cloud Computing Image"
              className="category-image"
            />
            <h3 className="category-title">IOT</h3>
          </a>
        </div>

        


        
      </div>
     
    </div>

    
  );
};

export default AppCategory;
