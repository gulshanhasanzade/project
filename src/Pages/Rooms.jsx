import React from 'react';
import '../Styles/Rooms.css';
import HotelRooms from '../components/HotelRooms';

const Rooms = () => {

  return (
    <div className = "rooms-section3">
    <div className="rooms-suites-container">
      <div className="rooms-suites-hero">
        <div className="rooms-suites-hero-content">
          <h1>Rooms & Suites</h1>
          <div className="breadcrumb">
            <span>Home</span><img src="./small.svg" alt="" /><span>Rooms</span>
          </div>
        </div>
      </div>
      <div className="rooms-suites-availability">
        <div className="input-group">
          <label>Check In</label>
          <input type="date" defaultValue="2023-12-08" />
        </div>
        <div className="input-group">
          <label>Check Out</label>
          <input type="date" defaultValue="2023-12-10" />
        </div>
        <div className="input-group guests-input">
          <label>Guests</label>
          <input type="text" defaultValue="2 Adults, 1 Child" />
        </div>
        <button className="btn-check-availability">Check Availability</button>
      </div>
    </div>
    <HotelRooms/>
  </div>
  );
};

export default Rooms;
