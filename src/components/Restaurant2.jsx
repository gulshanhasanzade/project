import React from 'react';
import './Restaurant.css';

const Restaurant = () => {
  return (
    <div className="restaurant-container">

      <div className="image-content">
        <img src="image100.jpg" alt="Restaurant" />
      </div>
      <div className="text-content">
        <h1>Best Rooftop Restaurant And Special Bar</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
        <button className="explore-button">Explore More <img src="right.svg" alt="" /> </button>
      </div>
     
    </div>
  );
};

export default Restaurant;
