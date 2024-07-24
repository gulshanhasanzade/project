

import React from 'react';
import './Plan.css';

const Plan = () => {
  return (
    <div className="contact-section">
      <header className="contact-header">
        <h1>Plan Your Stay At Seasons Heritage</h1>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  <br />
        The point of using Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
      </header>

      <div className="contact-info">
        <div className="contact-info-item">
          <img src="./call.svg" alt="Call us" />
          <span>Call Us</span>
          <p>(319) 555-0115</p>
        </div>
        <div className="contact-info-item">
      
          <img src="./address.svg" alt="Address" />
          <span>Address</span>
          <p>8502 Preston Rd. Inglewood, Maine</p>
        </div>
        <div className="contact-info-item">
           
          <img src="./email.svg" alt="Email Us" />
          <span>Email</span>
          <p>seasonsheritage@demo.com</p>
        </div>
      </div>


      <div className="contact-form-section">
        <div className="contact-image">
          <img src="./room5.jpg" alt="Room" />
        </div>
        <div className="contact-form">
          <h2>Let’s Start A Conversation</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable <br />content of a page when looking at its layout.
          </p>
          <form>
            <label>
              Name
              <input type="text" name="name" placeholder="Perry Wilson" />
            </label>
            <label>
              Email Address
              <input type="email" name="email" placeholder="perry.wilson@example.com" />
            </label>
            <label>
              Mobile Number
              <input type="tel" name="phone" placeholder="(219) 555-0114" />
            </label>
            <label>  
              <textarea name="message" placeholder="Message"> </textarea>
            </label>
            <button type="submit">Send Your Message <img src="whiteArrow.svg" alt="" /></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Plan;

