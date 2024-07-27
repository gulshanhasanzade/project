import React from 'react';
import '../Styles/PremiumSuite.css';
import Premium1 from '../components/Premium1';
import ReviewsList  from '../components/ReviewsList';

const roomData = {
  id: 3,
  title: "Premium Suite",
  images: [
    "/main1.jpg",  
    "/bathroom.jpg",  
    "/sofa.jpg"  
  ],
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  details: [
    { icon: "/size.svg", text: "95 m²" },
    { icon: "/bed.svg", text: "1 King Size Bed" },
    { icon: "/guest.svg", text: "2 Guests" }
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
      <h1>{roomData.title}</h1>
      <div className="room-details">
        {roomData.details.map((detail, index) => (
          <span key={index} className="room-detail-item">
            <img src={detail.icon} alt="" className="detail-icon" />
            {detail.text}
          </span>
        ))}
      </div>
      <p id='room-descriptionP'>{roomData.description}</p>
      <Premium1 />
      <ReviewsList />
    </div>
 
  );
};

export default PremiumSuite;
