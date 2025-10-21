
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
        'We start by trying to identify the problem and solution space, and assess the benefits and risks of various  AI/ML implementations.',
        'Our aim is to help you avoid pitfalls, inform you on future limitations, present trade offs, prerequisites and feasibility of bringing their project to fruition. We act as brainstorming partners, helping the client grow and develop their idea into a product or service prototype.',
        'The design will serve as a rough blueprint for all future development, and as a high level depiction of how components in the system combine to create desired functionality while adhering to business constraints.',
        'A few considerations we make during the design phase:',
        {
          type: 'bullets',
          items: [
            'Expected inputs and outputs in the production environment',
            'Availability of training datasets,plans to curate an inhouse set if required',
            'End consumer of model outputs and their expected level of expertise in the problem area.',
            'Position of model within the overarching product offered by company',
            'Costs and trade offs of possible component parts in the system'
          ]
        },

      ]
    },
    'model-training': {
      title: 'Model Training',
      content: [
        'Our model training services encompass the entire machine learning lifecycle, from data preparation to model deployment and monitoring.',
        'Given a publicly available or client provided dataset, we’ll pick a model architecture, run fine tuning experiments, and evaluation metrics based on client needs and considerations of the business problem.',
        'Quality is of the utmost importance so we’ll allocate time for reiteration at this stage if we hit any roadblocks in convergence or other performance metrics. At this stage we should consider how best the outputs of the models can be made easily accessible and understandable (context wise) to the downstream consumers of the output'
      ]
    },
    'data-pipelines': {
      title: 'Data Engineering',
      content: [
        'This service encapsulates the outer infrastructure that supports the models and must exist for them to function at scale with little human intervention.',
        'Extract transform and load (ETL) pipelines will interact with models as points of ingress and egress. Alerts will be integrated at critical points in the system to catch bad data and or erroneous model outputs, as well as to flag inputs for further investigation.',
        'This phase includes any tasks dealing with database connections, data cleaning and transformations, API calls, task orchestration and other data processing jobs.'
      ]
    },
    'ml-ops': {
      title: 'ML Ops',
      content: [
        'The MLOps service is where we turn prototypes and proof of concepts into production ready systems, building for reliability, scalability, and performance.',
        'Our approach includes model and data versioning, monitoring for degrading performance and  creating alerts if major changes are detected.',
        'Depending on the requirements of the project we will implement an auto retrain pipeline, allowing the model to self adjust as new data comes in.',
        'After the model has passed a quality and performance threshold, we can begin to explore our options for remote hosting and inference, given the business constraints.',
        'Costs associated with hardware access, availability needs, online and offline needs, and more would have been considered in the design-architecture stage and confirmed here.',
        'During all this, we keep an open line of communication with the you and informing you decisions are being made to avoid any surprises concerning the cost of cloud hosting initially and over time.'
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
  {servicesData[activeTab].content.map((item, index) => {
    // Check if item is a string (paragraph) or object (bullets)
    if (typeof item === 'string') {
      return (
        <p key={index} className="service-description">
          {item}
        </p>
      );
    } else if (item.type === 'bullets') {
      return (
        <ul key={index} className="service-bullets">
          {item.items.map((bullet, bulletIndex) => (
            <li key={bulletIndex}>{bullet}</li>
          ))}
        </ul>
      );
    }
    return null;
  })}
</div>

      </div>
     
    </div>
  );
}

export default ServicesPage;






