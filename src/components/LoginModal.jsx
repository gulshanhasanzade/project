

import React from 'react';
import './LoginModal.css';

const LoginModal = ({ closeModal, openCreateAccountModal }) => {
  return (
    <div className="login-modal-bg">
      <div className="login-modal">
        <div className="login-modal-content">
          <button className="close-button2" onClick={closeModal}>x</button>
          <h2>Welcome 👋 </h2>
          <span className='login'>Please login here</span>
          <form>
            <label>Email Address</label>
            <input type="email" name="email" required />
            <label>Password</label>
            <input type="password" name="password" required />
            <div className="remember-forgot">
              <label>
                <input type="checkbox" name="remember" /> 
                Remember Me
              </label>
              <a href="/">Forgot Password?</a>
            </div>
            <button id="loginBtn" type="submit">Login</button>
          </form>
          <button className="register-button" onClick={openCreateAccountModal}>Register</button>
          <span className='or'>Or Login With</span>
          <div className="login-with">
            <button className='google'> <img src="./google.svg" alt="Google" /> Login with Google</button>
            <button className='apple'> <img src="./apple.svg" alt="Apple" /> Login with Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

