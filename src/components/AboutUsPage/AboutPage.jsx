import MemberCard from './MemberCard'
import { useEffect, useState } from 'react';

import "./AboutPage.css";
import logo from "../../assets/pindar-logo.png";
import officeImg from "../../assets/office-image.jpg";


export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('our-mission');
  
  const AboutData = {
    'our-mission': {
      title: 'Our Mission',
      content: [
        'We architect scalable computer vision solutions that grow with your business needs. Our system design approach focuses on building robust, maintainable, and efficient infrastructure.',
        'Our team specializes in designing distributed systems that can handle large-scale image processing, real-time video analysis, and complex machine learning workflows.',
        'From edge computing deployments to cloud-native architectures, we ensure your computer vision systems perform optimally across different environments and use cases.'
      ]
    },
    'leadership': {
      title: 'Leadership',
      content: [
        'Our model training about-us encompass the entire machine learning lifecycle, from data preparation to model deployment and monitoring.',
        'We utilize state-of-the-art deep learning frameworks and techniques to train custom computer vision models tailored to your specific requirements and datasets.',
        'Our expertise includes transfer learning, data augmentation, hyperparameter optimization, and advanced training strategies to achieve optimal model performance.'
      ]
    },
    'data-privacy': {
      title: 'Data Privacy & Ethics',
      content: [
        'We design and implement robust data pipelines that orchestrate mission-critical workflows for computer vision applications.',
        'Our pipeline solutions handle data ingestion, preprocessing, feature extraction, model inference, and result aggregation at enterprise scale.',
        'From batch processing systems to real-time streaming architectures, we ensure your data flows seamlessly through every stage of your computer vision workflow.'
      ]
    }
   
  };

  const who_we_are = ['We help you go from out of the box components to custom solutions and design scalable systems that remove obstacles to your project goals. ',
                  'Technical decisions are influenced and measured by business goals and requirements']
  

  return (
    <div className="about-us-page">
      <div className="about-us-header">
      <div className="header_image">
            
            <div className="about-us-overlay"></div>
           
             </div>
      
        <h2 className="about-us-header-title"> About Us</h2>

        <img src={logo} alt="Pindar logo" className="about-us-logo" />


      </div>
      <div className='who-we-are-section'>
      <div className="who-we-are-content">
        <h2>Who We Are</h2>
        <p> {who_we_are}</p>
      </div>
      <div className="who-we-are-image">
        <img src={officeImg} alt="office Image" />
      </div>
      </div>

      <div className="about-us-container">
        {/* Tab Navigation */}
        <div className="about-us-tabs">
          {Object.entries(AboutData).map(([key, service]) => (
            <button
              key={key}
              /* Sets the active tab to service name or key */
              className={`about-us-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="about-us-pg-content">
           {/* uses the active tab var to dynamically acsess service content */}
          {AboutData[activeTab].content.map((paragraph, index) => (
            <p key={index} className="about-us-description">
              {paragraph}
            </p>
          ))}
      </div>

      </div>

      
     
    </div>
  );

}



