import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Dining from './Pages/Dining';
import Rooms from './Pages/Rooms';
import Contact from './Pages/Contact';
import Events from './components/Events';
import Gallery from './components/Gallery';
import LoginModal from './components/LoginModal';
import CreateAccountModal from './components/CreateAccountModal';
import SuccessMessageModal from './components/SuccessMessageModal';
import HotelRooms from './components/HotelRooms';
import PremiumSuite from './Pages/PremiumSuite';
import Deluxe from './components/Deluxe';
import Grande from './components/Grande';
import Studio from './components/Studio';
import Sea from './components/Sea';
import Premium from './components/Premium';
import BookingPage from './components/BookingPage';
import BookingDeluxe from './components/BookingDeluxe';
import BookingLuxury from './components/BookingLuxury';
import BookingStudio from './components/BookingStudio';
import BookingRoyal from './components/BookingRoyal';
import BookingPremium from './components/BookingPremium';
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

  const openLoginModal = () => setShowLoginModal(true);
  const openCreateAccountModal = () => setShowCreateAccountModal(true);
  const showSuccess = () => setShowSuccessMessage(true);

  return (
    <Router>
      <div className="App">
        <Header openLoginModal={openLoginModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/hotel-rooms" element={<HotelRooms />} />
          <Route path="/room/3" element={<PremiumSuite />} />
          <Route path="/room/1" element={<Deluxe />} />
          <Route path="/room/2" element={<Grande />} />
          <Route path="/room/4" element={<Studio />} />
          <Route path="/room/5" element={<Sea />} />
          <Route path="/room/6" element={<Premium />} />
          <Route path="/booking-page3" element={<BookingPage />} />
          <Route path="/booking-page1" element={<BookingDeluxe />} />
          <Route path="/booking-page2" element={<BookingLuxury />} />
          <Route path="/booking-page4" element={<BookingStudio />} />
          <Route path="/booking-page5" element={<BookingRoyal />} />
          <Route path="/booking-page6" element={<BookingPremium />} />
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
