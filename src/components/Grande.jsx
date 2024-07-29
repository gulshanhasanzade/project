import React from 'react';
import '../Styles/Sea.css';
import Section5 from '../components/Section5';
import ReviewsList from '../components/ReviewsList';
import Section3 from '../components/Section3';

const roomData = {
  id: 1,
  title: "Luxury Grande Suite",
  images: [
    "/luxury2.jpg",
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
      <Section5 />
      <ReviewsList /> 
      <Section3 />
    </div>
  );
};

export default PremiumSuite;
