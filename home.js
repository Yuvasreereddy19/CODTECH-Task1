import React from 'react';
import './home.css'; 

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
      </header>
      
      
      
    </div>
  );
};

export default Home;




\*home.css*\
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem;
  }
  
  .navbar-logo a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
  }
  
  .navbar-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .navbar-links li {
    display: inline;
  }
  
  .navbar-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .navbar-links a:hover {
    color: #ddd;
  }



