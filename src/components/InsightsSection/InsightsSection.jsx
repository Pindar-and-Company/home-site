import React from 'react';
import './InsightsSection.css';
import { useNavigate } from 'react-router-dom'; // Remove useParams, you don't need it here

import ArticleContent from '../../data_obj/ArticleContent';


const InsightsSection = ({ articles = [] }) => {
  // Move useNavigate to the TOP, right after the component declaration
  const navigate = useNavigate();
  const displayArticles = articles.length > 0 ? articles : ArticleContent;
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


export default InsightsSection
             