import React from 'react';
import './InsightsSection.css';
import { useNavigate } from 'react-router-dom'; // Remove useParams, you don't need it here

const InsightsSection = ({ articles = [] }) => {
  // Move useNavigate to the TOP, right after the component declaration
  const navigate = useNavigate();

  // Default sample data if no articles provided
  const defaultArticles = [
    {
      id: 1,
      date: '7/22/2025',
      title: 'Data as a liability',
      image: 'https://images.unsplash.com/photo-1546314029-80c1749e96fa?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Network connections visualization'
    },
    {
      id: 2,
      date: '6/15/2025',
      title: 'Mastering the ETL process',
      image: 'https://images.unsplash.com/photo-1635145613344-3e59b1e8afd0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Industrial pipes'
    },
    {
      id: 3,
      date: '4/7/2025',
      title: 'MLops: Meeting The Business Challenge',
      image: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Private sign on wall'
    },
    {
      id: 4,
      date: '3/20/2025',
      title: 'Finding the right solution',
      image: 'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'Colorful sticky notes on board'
    }
  ];

  const displayArticles = articles.length > 0 ? articles : defaultArticles;

  // Now handleArticleClick can use navigate because it's already declared above
  const handleArticleClick = (articleId) => {
    navigate(`/insight/${articleId}`);
  };

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