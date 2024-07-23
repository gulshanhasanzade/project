import React from 'react';
import './About.css';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import ExclusiveExperience from './ExclusiveExperience';
import Services from './Services';
import Services2 from './Services2';

const About = () => {
  return (
   <div div className="about-us-section">
    <div className="about-us-container">
      <div className="about-us-background">
        <div className="about-us-content">
          <h1>About Us</h1>
          <nav className="breadcrumb">
            <span>Home</span><img src="small.svg" alt="" /><span>About Us</span>
          </nav>
        </div>
      </div>
    </div>
<ExclusiveExperience/>
<Services/>
<Services2/>
<ServicesSection/>
<TestimonialsSection/>
    </div>
  );
}

export default About;
