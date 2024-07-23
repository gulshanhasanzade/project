import React from 'react';
import ReactPlayer from 'react-player';
import './ExclusiveExperience.css';

const ExclusiveExperience = () => {
  return (
    <div className="exclusive-experience-container">
      <h1>Escape To A World Of Luxury Hotels</h1>
      <p>
      Enjoy stunning views of the city skyline or the ocean from your private balcony. Our friendly staff provide exceptional services <br /> making you feel at home during your stay. Book now and make your next vacation unforgettable at our hotel. <br />
      Whether you’re traveling for business or pleasure, our hotel offers the ultimate in relaxation and comfort.
      </p>
      <div className="video-wrapper">
        <ReactPlayer
          url="https://youtu.be/u2RL1ITjjZ8?si=7Wy6hG5y_2cnSzZw" 
          className="react-player"
          playing
          controls
        />
      </div>
    </div>
  );
}

export default ExclusiveExperience;
