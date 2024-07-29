import React, { useState, useEffect } from 'react';
import '../Styles/Section7.css';

const data = {
  suite: {
    title: "Deluxe Oceanview Suite",
    details: [
      { icon: "/size.svg", description: "95 m²" },
      { icon: "/bed.svg", description: "1 King Size Bed" },
      { icon: "/guest.svg", description: "2 Guests" }
    ],
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  },
  features: [
    { icon: "/clean.svg", title: "Enhanced Clean", description: "This hotel committed to a 5-step enhanced cleaning process." },
    { icon: "/address.svg", title: "Great Location", description: "95% of recent guests give the location a 5-star rating." },
    { icon: "/key.svg", title: "Great check-in-experience", description: "90% of recent guests gave the check-in process a 5-star rating." },
    { icon: "/calendar.svg", title: "Free cancellation until 3:00 PM on Dec 7, 2023" }
  ],
  amenities: [
    { name: "Air Conditioner", icon: "/air-conditioner.svg" },
    { name: "Wifi", icon: "/wifi2.svg" },
    { name: "Smart TV", icon: "/smartTv.svg" },
    { name: "Laundry Service", icon: "/washingMachine.svg" },
    { name: "Welcome Drink", icon: "/drink.svg" },
    { name: "Hair Dryer", icon: "/dryer.svg" },
    { name: "Private Locker", icon: "/locker.svg" },
    { name: "Dedicated Workspace", icon: "/workspace.svg" },
    { name: "Microwave", icon: "/microwave.svg" },
    { name: "Refrigerator", icon: "/fridge.svg" }
  ],
  booking: {
    pricePerNight: 600,
    nights: 3,
    discount: 50,
    fees: 18
  }
};

const App = () => {
  const [checkIn, setCheckIn] = useState('2023-12-16');
  const [checkOut, setCheckOut] = useState('2023-12-18');
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalCost = (data.booking.pricePerNight * data.booking.nights) - data.booking.discount + data.booking.fees;

  return (
    <div className="App3">
      <section className="suite-info">
        <h1 id='title7'>{data.suite.title}</h1>
        <div className="suite-details">
          {data.suite.details.map((detail, index) => (
            <div key={index} className="suite-detail">
              <img src={detail.icon} alt={detail.description} />
              <span id='details7'>{detail.description}</span>
            </div>
          ))}
        </div>
        
        <p id='description7'>{data.suite.description}</p>
        <div className="line3"></div>
        <ul className="suite-features">
          {data.features.map((feature, index) => (
            <li key={index}>
              <img id='icons8' src={feature.icon} alt={feature.title} />
              <div id='feature1'>
                <h2 id='title8'>{feature.title}</h2>
                <p id='description8'>{feature.description}</p>
              </div>   
            </li>  
          ))}
        </ul>
        <div className="line3"></div>
        <h3 id='title9'>What This Place Offers</h3>
        <ul className="suite-amenities">
          {data.amenities.map((amenity, index) => (
            <li id ='amenity1' key={index}>
              <img id='icons9' src={amenity.icon} alt={amenity.name} />
              <span id='details9'>{amenity.name}</span>
            </li>
          ))}
        </ul>
        <button id='showButton3'>Show All 20 Amenities</button>
        <div className="line3"></div>
      </section>

      <section className="booking-summary">
        <h2 id='price6'>
          ${data.booking.pricePerNight}
          <span className="price-unit">/night</span>
        </h2>
        <form>
          <label id='labels1'>CheckIn
            <input id='selects3' type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </label>
          <label id='labels1'>CheckOut
            <input id='selects3' type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </label>
          <div className="form-group">
            <label id='labels1'>Rooms
              <select id='selects3' value={rooms} onChange={(e) => setRooms(e.target.value)}>
                <option value={1}>1 Room</option>
                <option value={2}>2 Rooms</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label id='labels1'>Adults
              <select id='selects3' value={adults} onChange={(e) => setAdults(e.target.value)}>
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
              </select>
            </label>
            <label id='labels1'>Child
              <select id='selects3' value={children} onChange={(e) => setChildren(e.target.value)}>
                <option value={0}>0 Children</option>
                <option value={1}>1 Child</option>
                <option value={2}>2 Children</option>
                <option value={3}>3 Children</option>
              </select>
            </label>
          </div>
          <button id='bookButton2' type="submit">Book Now</button>
        </form>
        <div className="price-details">
          <p className="price-item"><span id='title10'>${data.booking.pricePerNight} x {data.booking.nights} nights</span><span id='title10'>${data.booking.pricePerNight * data.booking.nights}</span></p>
          <p className="price-item"><span id='title10'>Discount</span><span className="discount">-${data.booking.discount}</span></p>
          <p className="price-item"><span id='title10'>Occupancy taxes and fees</span><span id='title10'>${data.booking.fees}</span></p>
          <div className="line5"></div>
          <h3 className="total"><span id='title11'>Grand Total</span><span id='title11'>${totalCost}</span></h3>
        </div>
      </section>
    </div>
  );
}

export default App;
