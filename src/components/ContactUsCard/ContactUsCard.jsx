import React from 'react';
import { Link } from "react-router-dom";
import './ContactUsCard.css';

// Import your city/building image
import cityImage from '../../assets/contact_us.jpg';

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="mobile-contact-image">
        <img src={cityImage} alt="City buildings" />
      </div>
      <div className="contact-content">
        <h2>How can we assist you?</h2>
        <button className="contact-button">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
      <div className="contact-image">
        <img src={cityImage} alt="City buildings" />
      </div>
    </section>
  );
}

export default ContactSection;