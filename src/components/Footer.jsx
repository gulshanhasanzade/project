import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo1">
          <img src="./LogoIcon.jpg" alt="Seasons Heritage Logo" />
          <p>(319) 555-0115</p>
          <p><a href="#">info@seasonsheritage.com</a></p>
          <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          <h2>We Are Looking Forward To Your Visit!</h2>
        </div>
      </div> 
      <ul className="footer-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/dining">Dining</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      <div className="footer2">
        <p>©2023 Seasons Heritage All Rights are reserved</p>
        <div className="footer2Icons"> 
        <a href="#"><img src='./facebook.svg'></img></a>
        <a href="#"><img src='./instagram.svg'></img></a>
        <a href="#"><img src='./twitter.svg'></img></a>
        </div>
      </div>
      {/* <span className='leaf'><img src='./leaf.svg' /></span> */}
    </footer>
  );
};

export default Footer;
