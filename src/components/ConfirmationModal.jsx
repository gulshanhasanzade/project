import React from 'react';
import '../Styles/ConfirmationModal.css'; 

const ConfirmationModal = ({ onViewBooking, onBackToHome }) => {
  return (
    <div className="confirmation-modal">
      <div className="modal-content">
        <img id="successSvg" src="./Group.svg" alt="Success" /> 
        <h2 id="confirmed0">Your Booking has <br /> Confirmed</h2>
        <p id="confirmed1">
          Thanks for choosing us! <br />
          Your booking has been confirmed, <br />
          we will send booking details via email.
        </p>
        <button id="successBTN2" onClick={onViewBooking}>View Booking</button>
        <button id="successBTN2" onClick={onBackToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
