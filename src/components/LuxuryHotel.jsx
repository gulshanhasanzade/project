
import React from 'react';
import content from '../json/content.json';
import '../Styles/LuxuryHotel.css';

const LuxuryHotel = () => {
  return (
    <div className="luxury-hotel">
      <div className="images1">
        {content.images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className={`image-${index + 1}`} />
        ))}
      </div>
      <div className="text-content">
        <h1>{content.title}</h1>
        {content.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <button id='btn'>{content.buttonText}<img src="./right.svg" alt="" /> </button>
      </div>
    </div>
  );
};

export default LuxuryHotel;
