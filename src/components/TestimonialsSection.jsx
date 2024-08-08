

import React, { useState } from 'react';
import '../Styles/TestimonialsSection.css';
import testimonialsData from '../json/testimonials.json';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsToShow = 3; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + testimonialsToShow) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - testimonialsToShow + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonials = testimonialsData.slice(currentIndex, currentIndex + testimonialsToShow);

  return (
    <div className="testimonials-section">
      <div className='background0'>
      <h1>Feelings Of Our Happy Client’s</h1>
      <div className="arrows">
        <button onClick={handlePrev}><img src="./arrow1.svg" alt="" /></button>
        <button onClick={handleNext}><img src="./arrow2.svg" alt="" /></button>
      </div>
      </div>
      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
      <div className="testimonials-container">
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="rating">
              {'★'.repeat(testimonial.rating)}
            </div>
            <h2>{testimonial.quote}</h2>
            <p>{testimonial.description}</p>
            <div className="author">
              <img src ={testimonial.image} alt={testimonial.name} className="author-img" />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TestimonialsSection;

