import React from 'react';
import '../Styles/Dining.css';
import Restaurant from '../components/Restaurant';
import CenterImage from '../components/CenterImage';
import Restaurant2 from '../components/Restaurant2';

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

