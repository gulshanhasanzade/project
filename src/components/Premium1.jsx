import React from 'react';
import '../Styles/Premium1.css';

const roomData = {
  features: [
    { icon: "/clean.svg", title: "Enhanced Clean", description: "This hotel committed 5-step enhanced cleaning process." },
    { icon: "/address.svg", title: "Great Location", description: "95% of recent guests give the location a 5-star rating." },
    { icon: "/key.svg", title: "Great check-in-experience", description: "90% of recent guests gave the check-in process a 5-star rating." },
    { icon: "/calendar.svg", title: "Free cancellation until 3:00 PM on Dec 7, 2023", description: "" }
  ],
  amenities: [
    { icon: "/air-conditioner.svg", text: "Air Conditioner" },
    { icon: "/wifi2.svg", text: "WiFi" },
    { icon: "/smartTv.svg", text: "Smart TV" },
    { icon: "/washingMachine.svg", text: "Laundry Service" },
    { icon: "/drink.svg", text: "Welcome Drink" },
    { icon: "/dryer.svg", text: "Hair Dryer" },
    { icon: "/locker.svg", text: "Private Locker" },
    { icon: "/workspace.svg", text: "Dedicated Workspace" },
    { icon: "/microwave.svg", text: "Microwave" },
    { icon: "/fridge.svg", text: "Refrigerator" }
  ]
};

const PremiumSuite = () => {
  return (
    
    <div className="room-detail3">
      <div className="line"></div>
      <div className="room-features">
        {roomData.features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.icon} alt={feature.title} className="feature-icon" />
            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="line"></div>
      <div className="room-amenities">
        <h2 id='roomH2'>What This Place Offers</h2>
        <ul>
          {roomData.amenities.map((amenity, index) => (
            <li key={index} className="amenity-item">
              <img src={amenity.icon} alt={amenity.text} className="amenity-icon" />
              {amenity.text}
            </li>
          ))}
        </ul>
        <button id='showButton'>Show All 20 Amenities</button>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default PremiumSuite;
