import React from 'react';
import './Project.css'; 

const Project = () => {
  return (
    <div className="project">
        <h1>PROJECTS :</h1>
     <p>1.Community service project on higher education(non technical)</p>
    <p>2.Mini Project on diagonstic report in virtual format using Vuforia framework and unity hub in augmented reailty(technical)</p>
    </div>
  );
};

export default Project;




\*project.css*\
.project {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .project p {
    font-size: 1.8em;
    color: #333;
    margin: 0;
    padding: 0;
  }
  
  .project p:hover {
    color: #007bff;
  }
  
