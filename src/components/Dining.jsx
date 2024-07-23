import React from 'react';
import './Dining.css';
import Restaurant from './Restaurant';
import CenterImage from './CenterImage';
import Restaurant2 from './Restaurant2';

const Dining = () => {
  return (
   <div div className="dining-us-section">
    <div className="dining-us-container">
      <div className="dining-us-background">
        <div className="dining-us-content">
          <h1>Dining</h1>
          <nav className="breadcrumb1">
            <span>Home</span><img src="small.svg" alt="" /><span>Dining</span>
          </nav>
        </div>
      </div>
    </div>
<Restaurant/>
<CenterImage/>
<Restaurant2/>
    </div>
  );
}

export default Dining;

