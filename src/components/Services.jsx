import React, { useEffect, useState } from 'react';
import './Services.css';
import data from './data.json'; 
function Services() {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    setServiceData(data);
  }, []);

  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container1">
      <div className="image-container1">
        <img   src={serviceData[0].image} alt={serviceData[0].alt} className="image1" />
        <img  src={serviceData[1].image} alt={serviceData[1].alt} className="image2" />
      </div>
      <div className="text-container1">
        <h2>{serviceData[2].title}</h2>
        <p>{serviceData[2].description[0]}</p>
        <p>{serviceData[2].description[1]}</p>
        <button className="explore-button1">{serviceData[2].buttonText} <img src="right.svg" alt="" /></button>
      </div>
    </div>
  );
}

export default Services;
