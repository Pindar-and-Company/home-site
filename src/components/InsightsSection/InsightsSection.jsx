import React from 'react';
import './InsightsSection.css';

const InsightsSection = ({ articles = [] }) => {
  // Default sample data if no articles provided
  const defaultArticles = [
    {
      id: 1,
      date: '7/22/2025',
      title: 'Data as a liability',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop&auto=format',
      imageAlt: 'Network connections visualization'
    },
    {
      id: 2,
      date: '6/15/2025',
      title: 'Mastering the ETL process',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&auto=format',
      imageAlt: 'Industrial pipes'
    },
    {
      id: 3,
      date: '4/7/2025',
      title: 'Privacy by design',
      image: 'https://images.unsplash.com/photo-1614064548237-3d9b9634e0dc?w=400&h=200&fit=crop&auto=format',
      imageAlt: 'Private sign on wall'
    },
    {
      id: 4,
      date: '3/20/2025',
      title: 'Finding the right solution',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=200&fit=crop&auto=format',
      imageAlt: 'Colorful sticky notes on board'
    }
  ];

  const displayArticles = articles.length > 0 ? articles : defaultArticles;

  return (
    <section className="insights-section">
      <div className="insights-container">
    
        
        <div className="insights-grid">
          {displayArticles.map((article) => (
            <div 
              key={article.id} 
              className="article-card"
              onClick={() => handleArticleClick(article.id)}
            >
              <div className="article-image-wrapper">
                <img
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  className="article-image"
                />
              </div>
              
              <div className="article-content">
                <div className="article-date">
                  {article.date}
                </div>
                
                <h3 className="article-title">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;