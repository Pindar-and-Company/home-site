// ArticlePage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArticleContent from '../../data_obj/ArticleContent';
import './InsightArticles.css';

const InsightArticles = ({ articles = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Default sample articles (same as in InsightsSection for consistency)
  const displayArticles = articles.length > 0 ? articles : ArticleContent;
  const article = displayArticles.find(a => a.id === parseInt(id));

  const handleGoBack = () => {
    navigate('/');
  };

  if (!article) {
    return (
      <div className="article-page">
        <div className="article-container">
          <button onClick={handleGoBack} className="back-button">
          
            Back to Insights
          </button>
          <div className="article-not-found">
            <h1>Article not found</h1>
            <p>The article you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-container">
        
        <article className="article-content">
          <header className="article-header">
          <div className="application-overlay"></div>
          <div className="article-image-container">
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                className="article-hero-image"
              />
            </div>
            <h1 className="insight-article-title">{article.title}</h1>
            <div className='insight-detials'>
            <p className="insight-author">By: Valentine Okundaye</p>
            <p className="insight-article-date">{article.date}</p>
            </div>
     
           
           
          </header>
          <div className="article-body">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="article-paragraph">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default InsightArticles;