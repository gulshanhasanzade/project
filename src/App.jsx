
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Dining from './components/Dining';
import Rooms from './components/Rooms';
import Contact from './components/Contact';
import Events from './components/Events';
import Gallery from './components/Gallery';
import LoginModal from './components/LoginModal';
import CreateAccountModal from './components/CreateAccountModal';
import SuccessMessageModal from './components/SuccessMessageModal';
import Details from './components/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const closeModal = () => {
    setShowLoginModal(false);
    setShowCreateAccountModal(false);
    setShowSuccessMessage(false);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const openCreateAccountModal = () => {
    setShowLoginModal(false);
    setShowCreateAccountModal(true);
  };

  const showSuccess = () => {
    setShowCreateAccountModal(false);
    setShowSuccessMessage(true);
  };

  return (
    <Router>
      <div className="App">
        <Header openLoginModal={openLoginModal} />
        <Routes>
          <Route path="/" element={<Home openLoginModal={openLoginModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
        {showLoginModal && <LoginModal closeModal={closeModal} openCreateAccountModal={openCreateAccountModal} />}
        {showCreateAccountModal && <CreateAccountModal closeModal={closeModal} showSuccessMessage={showSuccess} />}
        {showSuccessMessage && <SuccessMessageModal closeModal={closeModal} />}
      </div>
    </Router>
  );
};

export default App;

