

import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleEnquireClick = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/dining">Dining</NavLink></li>
          <li><NavLink to="/rooms">Rooms</NavLink></li>
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
      {isLoginModalOpen && (
        <>
          <div className="login-modal-bg" onClick={closeLoginModal}></div>
          <LoginModal closeModal={closeLoginModal} />
        </>
      )}
    </header>
  );
};

export default Header;
