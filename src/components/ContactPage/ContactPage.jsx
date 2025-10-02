
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import './ContactPage.css';

import ContactForm from '../ContactForm/ContactForm'
import { useLocation } from 'react-router-dom';

const HeaderImg = 'https://images.unsplash.com/photo-1566316166385-9237c2213471?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
function ContactPage() {

  const location = useLocation(); // Get the current URL

  return (
    <div className="contact-page">
      <div className="contact-header">
      <div className="header_image">
            
            <div className="contact-overlay"></div>
            <img 
            src={HeaderImg}
            alt="contact-image" 
            className="contact-img" />
             </div>
      
        <h1 className="contact-header-title"> Contact Us</h1>

      </div>
    
    <div className="contact-form-section">
    <ContactForm/>
     
    </div>
    </div>
  );
}

export default ContactPage;