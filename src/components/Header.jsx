
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';

const Header = ({ openLoginModal }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleEnquireClick = () => {
    if (openLoginModal) {
      openLoginModal();
    } else {
      console.error('openLoginModal is not a function');
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <img
          src="/menu-icon.svg" 
          alt="Menu Icon"
          className="menu-icon"
          onClick={toggleNav}
        />
        <ul className={isNavOpen ? 'nav-links open' : 'nav-links'}>
          <li><NavLink to="/" onClick={toggleNav}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={toggleNav}>About Us</NavLink></li>
          <li><NavLink to="/dining" onClick={toggleNav}>Dining</NavLink></li>
          <li><NavLink to="/rooms" onClick={toggleNav}> Rooms</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleNav}>Contact Us</NavLink></li>
        </ul>
        <div className="logo">
          <img src="./logo.svg" alt="Seasons Heritage Logo" />
        </div>
        <div className="contact">
          <span className="icon"><img src="./icon.svg" alt="Contact Icon" /></span>
          <span>(303) 555-0105</span>
          <button className="enquire-button" onClick={handleEnquireClick}>Enquire Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;


