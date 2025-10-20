import './MobileApplications.css'
import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import MobileCarousel from '../MobileCarousel/MobileCarousel';
import ApplicationsData from '../../data_obj/ApplicationData';

// Card component for carousel
function ApplicationCard({ content }) {
  const navigate = useNavigate();
  

  return (
    <div className='applications-click-card'>
    <Link to={`/applications/${content.id}`}><div className={`mobile-application-card ${content.className}`}>
      <div className="mobile-application-image-wrapper">
        <img src={content.image} alt={content.imageAlt} 
        className="mobile-application-image"/>
      </div>
      <div className="mobile-application-content" >
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      
      </div>
    </div> </Link>
    </div>
  );
}

function MobileApplications({ slice_value }) {
  const n = slice_value;
  const AppDataSlice = ApplicationsData.slice(0, n);

  return <MobileCarousel CardType={ApplicationCard} slides={AppDataSlice} />;
}

export default MobileApplications;