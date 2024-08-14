import React from 'react';
import '../Styles/About.css';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ExclusiveExperience from '../components/ExclusiveExperience';
import Services from '../components/Services';
import Services2 from '../components/Services2';

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
