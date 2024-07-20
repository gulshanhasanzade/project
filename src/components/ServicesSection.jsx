import React from 'react';
import './ServicesSection.css';
import servicesData from './servicesData.json';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className='services-text'>
      <h1>{servicesData.title}</h1>
      <p>{servicesData.description}</p>
      </div>
      <div className="services-container">
        {servicesData.services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
