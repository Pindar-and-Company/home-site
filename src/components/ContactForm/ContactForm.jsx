import React, { useState } from 'react';
import './ContactForm.css';

 function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    jobTitle: '',
    country: '',
    message: '',
    marketingConsent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <h2 className="contact-form-title">
          Ready to take the next step? Contact us.
        </h2>
        
        <p className="contact-form-required">*Required field</p>

        <div className="contact-form">
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

            {/* Country 
            <div className="form-field">
              <label className="form-label">
                Country<span className="required-asterisk">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                  <option value="other">Other</option>
                </select>
                <div className="select-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div> */}

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
  );
}

export default ContactForm 