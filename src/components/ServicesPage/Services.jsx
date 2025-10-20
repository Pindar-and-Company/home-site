
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Services.css';

//import ProcessSection from '../OurProcess/OurProcess'
import { useLocation } from 'react-router-dom';

const  HeaderImg = 'https://images.unsplash.com/photo-1617727553230-35c143f84010?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
function ServicesPage() {

  const location = useLocation(); // Get the current URL
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState('system-design');

    // Set active tab from URL parameter on mount and when it changes
    useEffect(() => {
      const tabParam = searchParams.get('tab');
      if (tabParam && servicesData[tabParam]) {
        setActiveTab(tabParam);
      }
    }, [searchParams]);
  
    // Update URL when tab changes
    const handleTabChange = (key) => {
      setActiveTab(key);
      setSearchParams({ tab: key });
    };

  const servicesData = {
    'system-design': {
      title: 'System Design',
      content: [
        'We architect scalable computer vision solutions that grow with your business needs. Our system design approach focuses on building robust, maintainable, and efficient infrastructure.',
        'Our team specializes in designing distributed systems that can handle large-scale image processing, real-time video analysis, and complex machine learning workflows.',
        'From edge computing deployments to cloud-native architectures, we ensure your computer vision systems perform optimally across different environments and use cases.'
      ]
    },
    'model-training': {
      title: 'Model Training',
      content: [
        'Our model training services encompass the entire machine learning lifecycle, from data preparation to model deployment and monitoring.',
        'We utilize state-of-the-art deep learning frameworks and techniques to train custom computer vision models tailored to your specific requirements and datasets.',
        'Our expertise includes transfer learning, data augmentation, hyperparameter optimization, and advanced training strategies to achieve optimal model performance.'
      ]
    },
    'data-pipelines': {
      title: 'Data Engineering',
      content: [
        'We design and implement robust data pipelines that orchestrate mission-critical workflows for computer vision applications.',
        'Our pipeline solutions handle data ingestion, preprocessing, feature extraction, model inference, and result aggregation at enterprise scale.',
        'From batch processing systems to real-time streaming architectures, we ensure your data flows seamlessly through every stage of your computer vision workflow.'
      ]
    },
    'ml-ops': {
      title: 'ML Ops',
      content: [
        'Our MLOps services bridge the gap between machine learning development and production deployment, ensuring reliable and scalable ML systems.',
        'We implement continuous integration and deployment pipelines specifically designed for machine learning models, including automated testing and validation.',
        'Our MLOps approach includes model versioning, monitoring, A/B testing, and automated retraining to maintain peak performance in production environments.'
      ]
    }
  };

  
  return (
    <div className="services-page">
      <div className="service-header">
      <div className="header_image">
            
            <div className="service-overlay"></div>
            <img 
            src={HeaderImg}
            alt="services-image" 
            className="service-img" />
             </div>
      
        <h1 className="services-header-title"> Services</h1>

      </div>
      <div className="services-container">
        {/* Tab Navigation */}
        <div className="services-tabs">
          {Object.entries(servicesData).map(([key, service]) => (
            <button
              key={key}
              /* Sets the active tab to service name or key */
              className={`service-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => handleTabChange(key)}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="services-pg-content">
           {/* uses the active tab var to dynamically acsess service content */}
          {servicesData[activeTab].content.map((paragraph, index) => (
            <p key={index} className="service-description">
              {paragraph}
            </p>
          ))}
      </div>

      </div>
     
    </div>
  );
}

export default ServicesPage;