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
        'We aim to use the principles of design and engineering to realize product and service visions of companies across the globe. We believe that innovative companies can bring meaningful improvements to the lives of many people and serve a crucial role in society.',
        "As engineering consultants, we do not exist to implement technical solutions and move on. Rather we use technical solutions as a means to an end, which is the measurable improvement of business offerings provided by the client.",
        'Pursuant to this, we aim to identify and build consensus around business KPIs and requirements for success in the earliest stages of engagement and tie performance metrics of implemented systems back to these guiding business goals.'
      ]
    },
    
    'data-privacy': {
      title: 'Data Privacy & Ethics',
      content: [
        "As MLOPs specialists we know that data is crucial, valuable, and potentially dangerous. For this reason we aim to identify the minimum required data points that we’ll need to carry out the project.",
        "In being careful about not collecting any data other than what's absolutely necessary, we aim to mitigate leaks and breaches of personally identifiable information.",
        "We ensure that data is encrypted in rest and in transit and that internal access to sensitive client data is policed by strict permissions and roles."
      ]
    }
   
  };

  const who_we_are = ['"The glory of the Olympiads shoots its rays afar in the races, where speed and strength are matched in the bruise of toil. ',
                  'But the victor, for the rest of his life, enjoys days of contentment"',
                "    — Pindar 476 BCE"]
  

  return (
    <div className="about-us-page">
      <div className="about-us-header">
      <div className="about-header-image">
            
            <div className="about-us-overlay"></div>
           
             </div>
      
        <h2 className="about-us-header-title">Business Results Delivered</h2>

        <img src={logo} alt="Pindar logo" className="about-us-logo" />


      </div>
      <div className='who-we-are-section'>
      <div className="who-we-are-content">
   
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



