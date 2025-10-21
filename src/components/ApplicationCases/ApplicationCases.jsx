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
// Function to parse text and inject hyperlinks
const parseTextWithLinks = (text, links = []) => {
  if (!links || links.length === 0) return text;

  let result = text;
  const parts = [];
  let lastIndex = 0;

  // Sort links by their position in the text (first occurrence)
  const sortedLinks = [...links].sort((a, b) => {
    const indexA = result.indexOf(a.word);
    const indexB = result.indexOf(b.word);
    return indexA - indexB;
  });

  sortedLinks.forEach((link, linkIndex) => {
    const index = result.indexOf(link.word, lastIndex);
    
    if (index !== -1) {
      // Add text before the link
      if (index > lastIndex) {
        parts.push(result.substring(lastIndex, index));
      }
      
      // Add the link
      parts.push(
        <a
          key={`link-${linkIndex}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-link"
        >
          {link.word}
        </a>
      );
      
      lastIndex = index + link.word.length;
    }
  });

  // Add remaining text
  if (lastIndex < result.length) {
    parts.push(result.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
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
          {UseCase.content.map((paragraph, index) => {
    // Check if item is a string (paragraph) or object (bullets)
    if (typeof paragraph === 'string') {
      return (
        <p key={index} className="use-case-paragraph">
        {parseTextWithLinks(paragraph.trim(), UseCase.links)}
     </p>
      );
    } else if (paragraph.type === 'bullets') {
      return (
        <ul key={index} className="application-bullets">
          {paragraph.items.map((bullet, bulletIndex) => (
            <li key={bulletIndex}>{bullet}</li>
          ))}
        </ul>
      );
    }
    return null;
  })}
              
          </div>
        </article>
      </div>
    </div>
  );
};

export default ApplicationCases;



