import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/BookingPage.css';
import ConfirmationModal from './ConfirmationModal';

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
      pricePerNight: 1200,
      discount: 110,
      taxes: 18,
      total: 0 
    },
    suiteImage: '/luxury3.jpg'
  });

  const navigate = useNavigate();

  useEffect(() => {
    calculateTotal();
  }, []); 

  useEffect(() => {
    calculateTotal(); 
  }, [bookingDetails.priceDetails.nights, bookingDetails.priceDetails.pricePerNight, bookingDetails.priceDetails.discount, bookingDetails.priceDetails.taxes]);

  const calculateTotal = () => {
    const { nights, pricePerNight, discount, taxes } = bookingDetails.priceDetails;
    const subtotal = nights * pricePerNight;
    const total = subtotal - discount + taxes;
    setBookingDetails(prevDetails => ({
      ...prevDetails,
      priceDetails: {
        ...prevDetails.priceDetails,
        total
      }
    }));
  };

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
                {!editing.dates && <a id='edit1' onClick={() => toggleEdit('dates')}>Edit</a>}
              </div>
              <div className="booking-item">
                <div className="booking-item-content">
                  <label id='dates'>Guests:</label> <br />
                  {editing.guests ? (
                    <input id='dates2'
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
            <h2 id='payment'>Choose Payment Method</h2>
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
            <h2 id='payment'>Credit/Debit Card</h2>
            <form>
              <div className="card-expiry-cvv">
                <label className="payment-description">
                  Card Number
                  <input className="payment-description" type="text" name="cardNumber" placeholder="8900 2671 4788 XX70" />
                </label>
                <label className="payment-description">
                  Card Holder Name
                  <input className="payment-description" type="text" name="cardHolder" placeholder="Perry Wilson" />
                </label>
              </div>
              <div className="card-expiry-cvv">
                <label className="payment-description">
                  Expiry Date
                  <input className="payment-description" type="text" name="expiryDate" placeholder="09/28" />
                </label>
                <label className="payment-description">
                  CVV
                  <input className="payment-description" type="text" name="cvv" placeholder="•••" />
                </label>
              </div>
            </form>
          </section>

          <section className="billing-address">
            <h2 id='payment'>Billing Address</h2>
            <form>
              <label>
                Name
                <input className="payment-description" type="text" name="billingName" placeholder="Perry Wilson" />
              </label>
              <div className="mail7">
                <label id='mail8'>
                  Email Address
                  <input className="payment-description" type="email" name="email" placeholder="perry.wilson@example.com" />
                </label>
                <label>
                  Mobile Number
                  <input className="payment-description" type="text" name="mobile" placeholder="(219) 555-0114" />
                </label>
              </div>
              <label>
                Flat, House no., Building, Company, Apartment
                <input className="payment-description" type="text" name="address" placeholder="House No 23" />
              </label>
              <label>
                Area, Colony, Street, Sector, Village
                <input className="payment-description" type="text" name="area" placeholder="Parker Rd. Allentown" />
              </label>
              <div className="threeInput">
                <label>
                  City
                  <select>
                    <option className="payment-description">New York</option>
                    <option className="payment-description">Baku</option>
                    <option className="payment-description">Other</option>
                  </select>
                </label>
                <label>
                  Pin Code
                  <input className="payment-description" type="text" name="pinCode" placeholder="311334" />
                </label>
                <label>
                  State
                  <select>
                    <option className="payment-description">United States of America</option>
                    <option className="payment-description">Azerbaijan</option>
                    <option className="payment-description">Other</option>
                  </select>
                </label>
              </div>
            </form>
          </section>

          <section className="cancellation-policy">
            <h2 id='payment'>Cancellation Policy</h2>
            <p id='cancellation'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters.
              {showFullText && " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
              <button onClick={() => setShowFullText(!showFullText)} className="learn-more-button">
                {showFullText ? " Show less" : " Learn more"}
              </button>
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              {showFullText2 && " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters."}
              <button onClick={() => setShowFullText2(!showFullText2)} className="learn-more-button">
                {showFullText2 ? " Show less" : " Learn more"}
              </button>
            </p>
          </section>
          <button className="confirm-pay-button" onClick={handleConfirmAndPay}>Confirm And Pay</button>
        </div>

        <div className="summary-box">
          <h3 id='payment'>Premium Suite</h3>
          <img src={bookingDetails.suiteImage} alt="Suite" />
          <div className="price-summary">
            <div className="price-row">
              <span className="payment-description">${bookingDetails.priceDetails.pricePerNight} x {bookingDetails.priceDetails.nights} nights</span>
              <span className="payment-description">${bookingDetails.priceDetails.pricePerNight * bookingDetails.priceDetails.nights}</span>
            </div>
            <div className="price-row">
              <span className="payment-description">Discount:</span>
              <span className="discount0">-${bookingDetails.priceDetails.discount}</span>
            </div>
            <div className="price-row">
              <span className="payment-description">Occupancy taxes and fees:</span>
              <span className="payment-description">${bookingDetails.priceDetails.taxes}</span>
            </div>
            <hr id='hr0'/>
            <div className="price-row total">
              <span id='grandTotal'>Grand Total:</span>
              <span id='grandTotal'>${bookingDetails.priceDetails.total}</span>
            </div>
          </div>
        </div>
      </div>
      {confirmationVisible && (
        <ConfirmationModal
          onViewBooking={() => setConfirmationVisible(false)}
          onBackToHome={() => navigate('/')}
        />
      )}
    </div>
  );
};

export default BookingPage;
