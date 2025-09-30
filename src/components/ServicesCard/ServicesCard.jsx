import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './ServicesCard.css';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button'
// Import your city/building image
import backgroundimg from '../../assets/services.jpg';


function ServicesSection() {
    const [activeService, setActiveService] = useState('system-design');
    const navigate = useNavigate();
    const handleClick = (tag) => {
      navigate(`/services/${tag}`);
   };
  
    const services = [
      {
        id: 'system-design',
        title: 'System Design',
        description: 'Learn how we architect solutions',
        route: 'system-design'
      },
      {
        id: 'model-training',
        title: 'Model Training',
        description: 'An overview of the model training process',
        route: 'model-training'
      },
      {
        id: 'data-pipelines',
        title: 'Data Engineering',
        description: 'Learn how we orchestrate mission critical workflows',
        route: 'data-pipelines'
      }
    ];
  
    return (
      <section className="services-overview">
          
        <div className="services-content">
        <div className="main-image">
        <div className='mobile-service-overlay'>
        <img src={backgroundimg} alt="services background image" className='services-background-image' />
       </div>
      </div>
          <h2 className="services-title">Services</h2>
          
          <div className="services-list">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-item ${activeService === service.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveService(service.id)}
               
              >
                <div className="service-text"  onClick={() => handleClick(service.route)} >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-arrow">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="service-underline"></div>
              </div>
            ))}
          </div>
      
          <button className="see-more-button">
            <Link to="/services">See More</Link>
          </button>
        </div>
      </section>
    );
}

export default ServicesSection;