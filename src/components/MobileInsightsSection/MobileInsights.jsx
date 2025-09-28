import React from 'react';
import './MobileInsights.css';
import { useNavigate } from 'react-router-dom';
import MobileCarousel from '../MobileCarousel/MobileCarousel';
import ArticleContent from '../../data_obj/ArticleContent';

// Single article card component for carousel
function ArticleCard({ content }) {
  const navigate = useNavigate();
  
  const handleArticleClick = (articleId) => {
    navigate(`/insight/${articleId}`);
  };

  return (
    <div
      className="mobile-article-card"
      onClick={() => handleArticleClick(content.id)}
    >
      <div className="mobile-article-image-wrapper">
        <img
          src={content.image}
          alt={content.imageAlt || content.title}
          className="mobile-article-image"
        />
      </div>
      <div className="mobile-article-content">
        <div className="mobile-article-date">
          {content.date}
        </div>
        <h3 className="mobile-article-title">
          {content.title}
        </h3>
      </div>
    </div>
  );
}

function MobileInsights() {
  return <MobileCarousel CardType={ArticleCard} slides={ArticleContent} />;
}

export default MobileInsights;