import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import '../Styles/BookingPage.css';

const BookingPage = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [editing, setEditing] = useState({ dates: false, guests: false });
  const [bookingDetails, setBookingDetails] = useState({
    dates: 'Nov 16 - 18',
    guests: '2 Adults, 1 Child',
    priceDetails: {
      nights: 3,
      pricePerNight: 500,
      discount: 50,
      taxes: 18,
      total: 1468
    },
    suiteImage: '/luxury1.jpg'
  });

  const navigate = useNavigate(); 

  const handleInputChange = (e, field) => {
    setBookingDetails({ ...bookingDetails, [field]: e.target.value });
  };

  const toggleEdit = (field) => {
    setEditing({ ...editing, [field]: !editing[field] });
  };

  const handleConfirmAndPay = () => {
    setConfirmationVisible(true);
    window.scrollTo(0, 0); 
  };

  const handleBackToHome = () => {
    navigate('/'); 
  };

  const handleViewBooking = () => {
    setConfirmationVisible(false); 
  };

  return (
    <div className="booking-page">
      <div className="page2">
        <div className="main-content">
          <h1 className="page-title">Confirm And Pay</h1>

          <section className="booking-details">
            <h2 id='bookingTitle'>Your Booking Details</h2>
            <div className="details8">
              <div className="booking-item">
                <div className="booking-item-content">
                  <label id='dates'>Dates:</label>
                  <br />
                  {editing.dates ? (
                    <input id='dates2'
                      type="text"
                      value={bookingDetails.dates}
                      onChange={(e) => handleInputChange(e, 'dates')}
                      onBlur={() => toggleEdit('dates')}
                    />
                  ) : (
                    <span>{bookingDetails.dates}</span>
                  )}
                </div>
                {!editing.dates && <a  id='edit1' onClick={() => toggleEdit('dates')}>Edit</a>}
              </div>
              <div className="booking-item">
                <div className="booking-item-content">
                  <label id='dates'>Guests:</label> <br />
                  {editing.guests ? (
                    <input  id='dates2'
                      type="text"
                      value={bookingDetails.guests}
                      onChange={(e) => handleInputChange(e, 'guests')}
                      onBlur={() => toggleEdit('guests')}
                    />
                  ) : (
                    <span>{bookingDetails.guests}</span>
                  )}
                </div>
                {!editing.guests && <a id='edit1' onClick={() => toggleEdit('guests')}>Edit</a>}
              </div>
            </div>
          </section>

          <section className="payment-method">
            <h2>Choose Payment Method</h2>
            <label className="payment-option">
              <div className="payment-description">
                Pay in full <br />
                <span className="description">Pay the total (${bookingDetails.priceDetails.total}) now and you're all set</span>
              </div>
              <input type="radio" name="payment" value="full" defaultChecked />
            </label>
            <label id="partialBooking" className="payment-option">
              <div className="payment-description">
                Pay part now, part later <br />
                <span className="description">Pay $500 now and you're all set</span>
              </div>
              <input type="radio" name="payment" value="partial" />
            </label>
          </section>

          <section className="credit-card-info">
            <h2>Credit/Debit Card</h2>
            <form>
              <div className="card-expiry-cvv">
                <label>
                  Card Number
                  <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" />
                </label>
                <label>
                  Card Holder Name
                  <input type="text" name="cardHolder" placeholder="Your Name" />
                </label>
              </div>
              <div className="card-expiry-cvv">
                <label>
                  Expiry Date
                  <input type="text" name="expiryDate" placeholder="MM/YY" />
                </label>
                <label>
                  CVV
                  <input type="text" name="cvv" placeholder="123" />
                </label>
              </div>
            </form>
          </section>

          <section className="billing-address">
            <h2>Billing Address</h2>
            <form>
              <label>
                Name
                <input type="text" name="billingName" placeholder="Your Name" />
              </label>
              <div className="mail7">
                <label>
                  Email Address
                  <input id='mailInput' type="email" name="email" placeholder="example@domain.com" />
                </label>
                <label>
                  Mobile Number
                  <input type="text" name="mobile" placeholder="123-456-7890" />
                </label>
              </div>
              <label>
                Flat, House no., Building, Company, Apartment
                <input type="text" name="address" placeholder="123 Street Name" />
              </label>
              <label>
                Area, Colony, Street, Sector, Village
                <input type="text" name="area" placeholder="Area Details" />
              </label>
              <div className="threeInput">
                <label>
                  City
                  <input type="text" name="city" placeholder="City" />
                </label>
                <label>
                  Pin Code
                  <input type="text" name="pinCode" placeholder="12345" />
                </label>
                <label>
                  State
                  <select>
                    <option>United States of America</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
            </form>
          </section>

          <section className="cancellation-policy">
            <h2>Cancellation Policy</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              {showFullText && " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
              <button onClick={() => setShowFullText(!showFullText)} className="learn-more-button">
                {showFullText ? " Show less" : " Learn more"}
              </button>
            </p>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              {showFullText2 && " Additional hidden content can be revealed here. This can include further explanations or details that complement the first section."}
              <button onClick={() => setShowFullText2(!showFullText2)} className="learn-more-button">
                {showFullText2 ? " Show less" : " Learn more"}
              </button>
            </p>
          </section>

          <button className="confirm-pay-button" onClick={handleConfirmAndPay}>Confirm And Pay</button>
        </div>

        <div className="summary-box">
          <h3>Premium Suite</h3>
          <img src={bookingDetails.suiteImage} alt="Suite" />
          <div className="price-summary">
            <div className="price-row">
              <span>${bookingDetails.priceDetails.pricePerNight} x {bookingDetails.priceDetails.nights} nights</span>
              <span>${bookingDetails.priceDetails.pricePerNight * bookingDetails.priceDetails.nights}</span>
            </div>
            <div className="price-row">
              <span>Discount:</span>
              <span className="discount">-${bookingDetails.priceDetails.discount}</span>
            </div>
            <div className="price-row">
              <span>Occupancy taxes and fees:</span>
              <span>${bookingDetails.priceDetails.taxes}</span>
            </div>
            <hr />
            <div className="price-row total">
              <span>Grand Total:</span>
              <span>${bookingDetails.priceDetails.total}</span>
            </div>
          </div>
        </div>

        {confirmationVisible && (
          <div className="confirmation-modal">
            <div className="modal-content">
               <img id='successPng' src="./Group.svg" alt="" /> 
              <h2>Your Booking has Confirmed</h2>
              <p>Thanks for choosing us! Your booking has been confirmed, we will send booking details via email.</p>
              <button onClick={handleViewBooking}>View Booking</button>
              <button onClick={handleBackToHome}>Back to Home</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookingPage;
