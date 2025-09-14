
/*import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import './Insights.css';
import HeaderImg from '../../assets/insights.jpg'
import InsightsSection from '../InsightsSection/InsightsSection'

import ProcessSection from '../OurProcess/OurProcess'
import { useLocation } from 'react-router-dom';


function InsightsPage() {

  const location = useLocation(); // Get the current URL

  return (
    <div className="insights-page">
      <div className="insights-header">
      <div className="header_image">
            
            <div className="insights-overlay"></div>
            <img 
            src={HeaderImg}
            alt="insights-image" 
            className="insights-img" />
             </div>
      
        <h2 className="insights-header-title"> Insights</h2>

      </div>
      <div className="insight-articles"> <InsightsSection/> </div>
     
    </div>
  );
}

export default InsightsPage;
*/


import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import './InsightsPage.css';
import HeaderImg from '../../assets/insights.jpg';
import { useLocation } from 'react-router-dom';
import ApplicationsGrid from '../ApplicationsSection/ApplicationsCard';
import InsightsSection from '../InsightsSection/InsightsSection'


function InsightsPage() {

  const location = useLocation(); // Get the current URL

  return (
    <div className="insights-page">
      <div className="insights-header">
      <div className="header_image">
            <div className="insights-overlay"></div>
            <img 
            src={HeaderImg}
            alt="insights-image" 
            className="insights-img" />
             </div>
        <h2 className="insights-header-title"> Insights</h2>
      </div>
     <div className="insights-articles">
     <InsightsSection/>
     </div>
    </div>
  );
}

export default InsightsPage;