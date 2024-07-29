import React from 'react';
import '../Styles/Sea.css';
import Section4 from '../components/Section4';
import ReviewsList from '../components/ReviewsList';
import Section3 from '../components/Section3';

const roomData = {
  id: 1,
  title: "Deluxe Oceanview Suite",
  images: [
    "/luxury1.jpg",
    "/bathroom.jpg",
    "/sofa.jpg"
  ]
};

const PremiumSuite = () => {
  return (
    <div className="room-detail">
      <div className="room-images">
        <img src={roomData.images[0]} alt="Main view" className="main-image" />
        <div className="thumbnail-images">
          {roomData.images.slice(1).map((img, index) => (
            <img key={index} src={img} alt={`Thumbnail ${index}`} className="thumbnail" />
          ))}
        </div>
      </div>
      <Section4 />
      <ReviewsList /> 
      <Section3 />
    </div>
  );
};

export default PremiumSuite;
