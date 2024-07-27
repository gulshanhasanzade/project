import React, { useState } from 'react';
import '../Styles/Section2.css';

const data = {
  suite: {
    title: "Premium Suite",
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
    pricePerNight: 500,
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
            <li key={index}>
              <img id='icons9' src={amenity.icon} alt={amenity.name} />
              <span id='details9'>{amenity.name}</span>
            </li>
          ))}
        </ul>
        <button id='showButton3'>Show All 20 Amenities</button>
        <div className="line3"></div>
      </section>

      <section className="booking-summary">
        <h2>
          ${data.booking.pricePerNight}
          <span className="price-unit">/night</span>
        </h2>
        <form>
          <label>CheckIn
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
          </label>
          <label>CheckOut
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </label>
          <div className="form-group">
            <label>Rooms
              <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
                <option value={1}>1 Room</option>
                <option value={2}>2 Rooms</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>Adults
              <select value={adults} onChange={(e) => setAdults(e.target.value)}>
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
              </select>
            </label>
            <label>Child
              <select value={children} onChange={(e) => setChildren(e.target.value)}>
                <option value={0}>0 Children</option>
                <option value={1}>1 Child</option>
                <option value={2}>2 Children</option>
              </select>
            </label>
          </div>
          <button type="submit">Book Now</button>
        </form>
        <div className="price-details">
          <p>${data.booking.pricePerNight} x {data.booking.nights} nights: ${data.booking.pricePerNight * data.booking.nights}</p>
          <p>Discount: -${data.booking.discount}</p>
          <p>Occupancy taxes and fees: ${data.booking.fees}</p>
          <h3>Grand Total: ${totalCost}</h3>
        </div>
      </section>
    </div>
  );
}

export default App;
