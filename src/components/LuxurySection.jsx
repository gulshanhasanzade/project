import React from 'react';
import '../Styles/LuxurySection.css';
import luxuryData from '../json/data2.json';

const LuxurySection = () => {
  return (
    <div className="luxury-section" style={{ backgroundImage: `url(${luxuryData.images[0].src})` }}>
      <div className="luxury-content">
        <h1>{luxuryData.title}</h1>
        {luxuryData.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <a href="#" className="luxury-button">{luxuryData.buttonText} <img src="./whiteArrow.svg" alt="" /> </a>
      </div>
    </div>
  );
};

export default LuxurySection;
