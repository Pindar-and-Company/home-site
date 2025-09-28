// ArticlePage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './ApplicationCases.css';
import ApplicationsData from '../../data_obj/ApplicationData';

const ApplicationCases = ({ applications = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const DisplayCases = applications.length > 0 ? applications : ApplicationsData;
  const UseCase = DisplayCases.find(b => b.id === id);



  const handleGoBack = () => {
    navigate('/');
  };


  if (!UseCase) {
    console.log(UseCase)
    return (
      <div className="use-case-page">
        <div className="use-case-container">
          <div className="use-case-not-found">
            <h1>Application not found</h1>
            <p>The Application article you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="use-case-page">
      <div className="use-case-container">
      <header className="use-case-header">
          <div className="use-case-overlay"></div>
          <div className="use-case-image-container">
              <img
                src={UseCase.image}
                alt={UseCase.imageAlt || UseCase.title}
                className="use-case-hero-image"
              />
            </div>
            <h1 className="use-case-title">{UseCase.title}</h1>           
          </header>
        
        <article className="use-case-content">
          
          <div className="use-case-body">
            {UseCase.content.split('\n').map((paragraph, index) => (
              <p key={index} className="use-case-paragraph">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ApplicationCases;