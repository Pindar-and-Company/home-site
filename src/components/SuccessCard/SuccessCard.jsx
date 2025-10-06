import React from 'react';
import { Link } from "react-router-dom";
import './SuccessCard.css';

// Import your city/building image

const successImg = 'https://images.unsplash.com/photo-1513171920216-2640b288471b?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
function SuccessSection() {
  return (
    <section className="success-section">
      <div className="mobile-success-image">
        <img src={successImg} alt="City buildings" />
      </div>
      <div className="success-content">
        <h2>We look forward to connecting!</h2>
        <p >Be on the lookout for an email response from us.
      
          </p>
      </div>
      <div className="success-image">
        <img src={successImg} alt="crosswalk" />
      </div>
    </section>
  );
}

export default SuccessSection;