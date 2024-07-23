import React, { useEffect, useState } from 'react';
import './Services2.css';
import data from './serviceDetails.json'; 

function Services2() {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    setServiceData(data); 
  }, []);

  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container2">
      <div className="text-container2">
        <h2>{serviceData[1].title}</h2>
        <p>{serviceData[1].description[0]}</p>
        <p>{serviceData[1].description[1]}</p>
        <button className="explore-button2">{serviceData[1].buttonText} <img src="right.svg" alt="" /></button>
      </div>
      <div className="image-container2">
        <img src={serviceData[0].image} alt={serviceData[0].alt} className="image" />
      </div>
    </div>
  );
}

export default Services2;
