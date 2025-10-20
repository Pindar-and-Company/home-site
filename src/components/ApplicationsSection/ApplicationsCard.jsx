import './ApplicationsCard.css'
import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// Import your images applications
import ApplicationsData from '../../data_obj/ApplicationData';


function ApplicationsGrid({ slice_value }) {
  // Applications data dictionary
  const n = slice_value;
  const AppDataSlice = ApplicationsData.slice(0, n);
 
  const navigate = useNavigate();

  const handleAppClick = (appId) => {
      navigate(`/applications/${appId}`);
   };
  

  return (
    <section className="applications-container">
      {AppDataSlice.map((app) => (
        <div key={app.id} className={`application-card ${app.className}`} 
        >
          {/* Conditionally render content and image based on imagePosition */}
          {app.imagePosition === 'left' ? (
            <>
              {/* Image first */}
              <div className="application-image">
                <img src={app.image} alt={app.imageAlt} />
              </div>
             
              {/* Content second */}
              <div className="application-content"  onClick={() => handleAppClick(app.id)}>
                <h2>{app.title}</h2>
                <p>{app.description}</p>
                <button className="application-learn-more-button">
                  <Link to={handleAppClick(app.id)}>Learn More</Link>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Content first */}
              <div className="application-content"  onClick={() => handleAppClick(app.id)}>
                <h2>{app.title}</h2>
                <p>{app.description}</p>
                <button className="application-learn-more-button">
                  <Link to={handleAppClick(app.id)}>Learn More</Link>
                </button>
              </div>
              {/* Image second */}
              <div className="application-image">
                <img src={app.image} alt={app.imageAlt} />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default ApplicationsGrid;