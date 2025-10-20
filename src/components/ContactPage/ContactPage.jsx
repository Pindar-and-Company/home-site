
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import './ContactForm.css';
import './ContactPage.css';
import supabase from "../../utils/supabaseClient.js";
import ScrollToTop from '../../ScrollToTop';

import { useLocation } from 'react-router-dom';
import SuccessSection from '../SuccessCard/SuccessCard'


const HeaderImg = 'https://images.unsplash.com/photo-1566316166385-9237c2213471?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
function ContactPage() {

  const location = useLocation(); // Get the current URL

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    jobTitle: '',
    country: '',
    message: '',
   
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
     // Clear error when user starts typing
     if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };



  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
     // Validate form
     const newErrors = {};
    // Ensure required feilds are filled 
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name required';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

     // If there are errors, set them and don't submit
     if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear errors and submit
    setErrors({});

   
    // DB Insert
     // Submit to Supabase
  const { data, error } = await supabase
  .from('contact_form_response').insert([
    {
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim(),
      job_title: formData.jobTitle.trim(),
      company: formData.company.trim(),
      message: formData.message.trim(),
   
    }
  ]);

if (error) {
  console.error("Error:", error);
  alert('Failed to submit form. Please try again.');
} else {
  console.log("Data submitted successfully:", data);
  setShowSuccess(true);
  // Reset form
  setFormData({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    jobTitle: '',
    country: '',
    message: '',
    marketingConsent: false
  });
}
};
 


useEffect(() => {
  const form = formRef.current;
  
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }

  return () => {
    if (form) {
      form.removeEventListener('submit', handleSubmit);
    }
  };
}, [formData]);

return (
  <div className="contact-page">
    {showSuccess ? (
      <div className="success-container">
        <ScrollToTop />
   <SuccessSection/>
       
      </div>
    ) : (
      <>
        <div className="contact-header">
          <div className="header_image">
            <div className="contact-overlay"></div>
            <img 
              src={HeaderImg}
              alt="contact-image" 
              className="contact-img" 
            />
          </div>
          <h1 className="contact-header-title">Contact Us</h1>
        </div>
      
        <div className="contact-form-section">
          <div className="contact-form-wrapper">
            <div className="contact-form-container">
              <h2 className="contact-form-title">
                Ready to take the next step? Contact us.
              </h2>
              
              <p className="contact-form-required">*Required field</p>

              <div ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  {/* First Name */}
                  <div className="form-field">
                    <label className="form-label">
                      First name<span className="required-asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                    {errors.firstName && (
                      <p className="error-message">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="error-icon">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                        </svg>
                        Error: {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="form-field">
                    <label className="form-label">
                      Last name<span className="required-asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                    {errors.lastName && (
                      <p className="error-message">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="error-icon">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                        </svg>
                        Error: {errors.lastName}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="form-field">
                    <label className="form-label">
                      Company<span className="required-asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                    {errors.company && (
                      <p className="error-message">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="error-icon">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                        </svg>
                        Error: {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label className="form-label">
                      Email<span className="required-asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                    {errors.email && (
                      <p className="error-message">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="error-icon">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                        </svg>
                        Error: {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Job Title */}
                  <div className="form-field">
                    <label className="form-label">Job title</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div className="form-field form-field-full">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="form-textarea"
                  />
                </div>

                {/* Marketing Consent & Submit */}
                <div className="form-footer">
                  <button
                    onClick={handleSubmit}
                    className="submit-button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
);

}

export default ContactPage;