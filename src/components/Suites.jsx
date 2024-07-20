

import React from 'react';
import content from './suitesContent.json';
import './Suites.css';

const Suites = () => {
  return (
    <div className="suites-section">
      <div className="suites-header">
        <h1 className="suites-title">{content.title}</h1>
        <button className="suitesBtn">{content.buttonText} <img src="./right.svg" alt="" />  </button>
      </div>
      <div className="suites-list">
        {content.suites.map((suite, index) => (
          <div className="suite-card" key={index}>
            <img src={process.env.PUBLIC_URL + '/' + suite.image} alt={suite.name} className="suite-image" />
            <h2 className="suite-name">{suite.name}</h2>
            <p className="suite-details">
              <span> <img src="./size.svg" alt="" />  {suite.size}</span>  <span> <img src="./bed.svg" alt="" /> {suite.bed}</span>  <span> <img src="/guest.svg" alt="" />  {suite.guests}</span>
            </p>
            <p className="suite-description">{suite.description}</p>
            <button className="suite-discover-more">Discover More <img src="./right.svg" alt="" /> </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suites;

