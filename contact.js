import React from "react";
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>You can reach out to me via email at yuvasreereddyjanga@gmail.com.</p>
    </section>
  );
}

export default Contact;




\*contact.css*\
#contact {
    padding: 40px;
    background-color: #f4f4f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  #contact h2 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
  }
  
  #contact p {
    font-size: 1.2em;
    color: #555;
  }
  
  #contact p a {
    color: #007BFF;
    text-decoration: none;
  }
  
  #contact p a:hover {
    text-decoration: underline;
  }
  
