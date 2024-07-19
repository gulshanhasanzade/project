import React from 'react';
import content from './cuisineContent.json';
import './CuisineExperience.css';

const CuisineExperience = () => {
  return (
    <div className="cuisine-experience">
      <div className="text-content2">
        <h1>{content.title}</h1>
        {content.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <button>{content.buttonText} <img src="./whiteArrow.svg" alt="" /> </button>
      </div>
      <div className="images2">
        {content.images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className={`image-${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CuisineExperience;
