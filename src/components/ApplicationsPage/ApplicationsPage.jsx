
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import './ApplicationsPage.css';
import HeaderImg from '../../assets/app-image.png';

import { useLocation } from 'react-router-dom';
import ApplicationsGrid from '../ApplicationsSection/ApplicationsCard';

import MobileApplications from '../MobileApplications/MobileApplications'

function ApplicationsPage() {

  const location = useLocation(); // Get the current URL

  return (
    <div className="application-page">
      <div className="application-header">
      <div className="header_image">
            
            <div className="application-overlay"></div>
            <img 
            src={HeaderImg}
            alt="application-image" 
            className="application-img" />
             </div>
      
        <h1 className="application-header-title"> Applications</h1>

      </div>
     <div className="app-grid">
     <ApplicationsGrid slice_value={4} />
     </div>
     <div className="mobile-app-grid" > <MobileApplications/></div>
    </div>
  );
}

export default ApplicationsPage;