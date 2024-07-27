import React from 'react';
import Header from '../components/Header';
import LuxuryHotel from '../components/LuxuryHotel';
import CuisineExperience from '../components/CuisineExperience';
import Suites from '../components/Suites';
import LuxurySection from '../components/LuxurySection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection'; 
import GallerySection from '../components/GallerySection';
import '../Styles/Home.css';

export default function Home({ openLoginModal }) {
  return (
    <div className='home'>
      <Header openLoginModal={openLoginModal} />
       <div className="hero-container">
        <div className="hero-section">
          <h1>Find Perfect Vacation With Seasons Heritage</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
          <button className="book-now-button">Book Now</button>
        </div>
        <div className="availability-section">
          <div className="check-in">
            <label>Check In</label>
            <input type="date" defaultValue="2023-12-08" />
          </div>
          <div className="check-out">
            <label>Check Out</label>
            <input type="date" defaultValue="2023-12-10" />
          </div>
          <div className="guests">
            <label>Guests</label>
            <input type="text" defaultValue="2 Adults, 1 Child" />
          </div>
          <button className="check-availability-button">Check Availability</button>
        </div>
       </div> 
      <LuxuryHotel />
      <CuisineExperience />
      <Suites/>
      <LuxurySection/>
      <ServicesSection/>
      <TestimonialsSection /> 
      <GallerySection />
    </div>
  );
}
