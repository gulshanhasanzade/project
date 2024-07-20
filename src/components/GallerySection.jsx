
import React from 'react';
import './GallerySection.css';
import galleryData from './gallery2.json';

const GallerySection = () => {
  return (
    <div className="gallery-section">
      <div className="gallery-row">
        {galleryData.images.slice(0, 4).map((image, index) => (
          <img key={index} src={`/${image}`} alt={`Gallery image ${index + 1}`} className="gallery-image" />
        ))}
      </div>
      <div className="gallery-center">
        <img src={`/${galleryData.centerImage}`} alt="Center image" className="center-image" />
        <h1>{galleryData.title}</h1>
        <button onClick={() => window.location.href = galleryData.buttonLink}>{galleryData.buttonText} <img src="/whiteArrow.svg" alt="" /></button>
      </div>
      <div className="gallery-row">
        {galleryData.images.slice(4).map((image, index) => (
          <img key={index} src={`/${image}`} alt={`Gallery image ${index + 5}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
