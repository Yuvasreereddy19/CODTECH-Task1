import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <h1 className="intro-title">Hello, I'm Your Yuvasree</h1>
        <p className="intro-description">
        I'm from kurnool, currently pursuing my B.Tech in CST(Computer Science and Technology) at G.Pulla Reddy engineering College, Kurnool. I have completed my intermediate at Narayana junior College and my schooling at Montessori High School.I am an active participant in my college events and I have participated in many of my college events like Anokha 2.0 which is conducted by IEEE, Technologica which is hands-on session on data science, Tedx, Brain wreck, Hackathon HR fusion conducted by XR monk which is based on AR .I'm good at Technologies like Html,Css,Javascript,Java,MySql
        </p>
        
        
  
      </div>
    </section>
  );
}

export default Intro;






\*intro.css*\
.intro {
    background-color: #f0f0f0;
    color: #333;
    padding: 4rem 1rem;
    text-align: center;
  }
  
  .intro-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .intro-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .intro-description {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  
  .intro-contact-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
  }
  
  .intro-contact-button:hover {
    background-color: #0056b3;
  }

