import React from 'react';
import './Navbar.css';

const Navbar = ()=>{
    return(
        <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">My Portfolio</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="intro">intro</a></li>
        <li><a href="intro/project">project</a></li>
        <li><a href="intro/project/contact">Contact</a></li>
        
      </ul>
    </nav>
    );
}
export default Navbar;





\*navbar.css*\
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
