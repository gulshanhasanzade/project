import React, { useState, useEffect } from 'react';
import '../Styles/Section3.css';

const suites = [
  {
    title: "Luxury Grande Suite",
    image: "/luxury2.jpg",
    details: [
      { icon: "/size.svg", description: "120 m²" },
      { icon: "/bed.svg", description: "1 King Size Bed" },
      { icon: "/guest.svg", description: "2 Guests" }
    ],
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Deluxe Oceanview Suite",
    image: "/luxury1.jpg",
    details: [
      { icon: "/size.svg", description: "90 m²" },
      { icon: "/bed.svg", description: "1 King Size Bed" },
      { icon: "/guest.svg", description: "2 Guests" }
    ],
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Premium Suite",
    image: "/luxury3.jpg",
    details: [
      { icon: "/size.svg", description: "95 m²" },
      { icon: "/bed.svg", description: "1 King Size Bed" },
      { icon: "/guest.svg", description: "2 Guests" }
    ],
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Executive Suite",
    image: "/luxury1.jpg",
    details: [
      { icon: "/size.svg", description: "100 m²" },
      { icon: "/bed.svg", description: "1 King Size Bed" },
      { icon: "/guest.svg", description: "3 Guests" }
    ],
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Presidential Suite",
    image: "/luxury2.jpg",
    details: [
      { icon: "/size.svg", description: "150 m²" },
      { icon: "/bed.svg", description: "2 King Size Beds" },
      { icon: "/guest.svg", description: "4 Guests" }
    ],
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Honeymoon Suite",
    image: "/luxury3.jpg",
    details: [
      { icon: "/size.svg", description: "110 m²" },
      { icon: "/bed.svg", description: "1 King Size Bed" },
      { icon: "/guest.svg", description: "2 Guests" }
    ],
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const App = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDiscoverAll = () => {
    setShowAll(true);
  };

  return (
    <div className="App4">
      <section className="similar-suites">
        <div className="section-title0">
        <h2>Similar Suites</h2>
        {!showAll && (
          <button className="discover-all" onClick={handleDiscoverAll}>Discover All Suites <img src="/right.svg" alt="" /></button>
        )}  
        </div>

        <div className={`suites-container ${showAll ? 'scrollable' : ''}`}>
          {suites.slice(0, showAll ? suites.length : 3).map((suite, index) => (
            <div className="suite-card2" key={index}>
              <img src={suite.image} alt={suite.title} className="suite-image" />
              <h3 id='title14'>{suite.title}</h3>
              <div className="suite-details">
                {suite.details.map((detail, index) => (
                  <div key={index} className="suite-detail">
                    <img  src={detail.icon} alt={detail.description} />
                    <span id='title15'>{detail.description}</span>
                  </div>
                ))}
              </div>
              <p id='title16'>{suite.description}</p>
              <a href="#" className="discover-more">Discover More <img src="/right.svg" alt="" /></a>
            </div>
          ))}
        </div>
       
      </section>
    </div>
  );
}

export default App;
