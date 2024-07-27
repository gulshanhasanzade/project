
import React from 'react';
import '../Styles/CreateAccountModal.css';

const CreateAccountModal = ({ closeModal, showSuccessMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    showSuccessMessage();
  };

  return (
    <div className="create-account">
      <div className="create-account-modal">
        <div className="create-account-modal-content">
          <button className="close-button" onClick={closeModal}>x</button> 
          <h2>Create New Account</h2>
          <span className='details'>Please enter details</span>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input  className='input' type="text" name="name" required />
            <label>Email Address</label>
            <input  className='input' type="email" name="email" required />
            <label>Password</label>
            <input className='input' type="password" name="password" required />
            <label id='terms'>
              <input id='check' type="checkbox" name="terms" required />
              <span>I agree to the Terms & Conditions</span> 
            </label>
            <button className='submit' type="submit">Register</button>
            <span className='or'>Or Login With</span>
          <div className="login-with">
            <button className='google'> <img src="./google.svg" alt="Google" /> Login with Google</button>
            <button className='apple'> <img src="./apple.svg" alt="Apple" /> Login with Apple</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;

