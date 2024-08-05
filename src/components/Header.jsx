// Header.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Header.css';

const Header = ({ openLoginModal }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
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
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/dining">Dining</NavLink></li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <NavLink id='dropDown2' to="/rooms">Rooms </NavLink>
          </li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
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
