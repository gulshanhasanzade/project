

import React from 'react';
import './SuccessMessageModal.css';

const SuccessMessageModal = ({ closeModal }) => {
  return (
    <div className="success-message-modal">
      <div className="success-message-modal">
        <div className="success-message-modal-content">
          <button className="close-button" onClick={closeModal}>x</button>
          <img  className="success-icon" src="./successIcon.png" alt="" />
          <h2 id='success'>Password Changed Successfully</h2>
          <span>Your password has been updated successfully</span>
          <button id='successBTN' onClick={closeModal}>Back to Login</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessageModal;

