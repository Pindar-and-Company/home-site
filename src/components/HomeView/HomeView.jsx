import './HomeView.css'
import ApplicationsGrid from '../ApplicationsSection/ApplicationsCard';
import ContactSection from '../ContactUsCard/ContactUsCard';
import ServicesSection from '../ServicesCard/ServicesCard';
import InsightsSection from '../InsightsSection/InsightsSection';
import MobileInsights from'../MobileInsightsSection/MobileInsights'
import MobileApplications from '../MobileApplications/MobileApplications'

import { Link } from "react-router-dom";


function HomeView() {
    const backgroundImg = 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return ( 

        <main id="home_view">
             <section className="main-hero"> 
            <div className='image-container'>

            <img 
             
                src={backgroundImg}
                alt="logo" 
                className="background-img" />
                <div className="dark-overlay"></div>
                </div>
                
                <section className="intro-section">
                    <div className='mobile_background_card'>
                    <h1>MLops Consulting</h1>
                    <p>We help you go from out of the box components
                    to custom solutions and design scalable systems that
                     remove obstacles to your project goals</p>

          
                    <button className="learn-more-button">
                    <Link to="" target="_blank">Learn More</Link> </button> 
                    </div>
                    </section>
            </section>
            
            <section className="applications-section">
                <h2 className='main-heading'>Applications</h2>
                <ApplicationsGrid slice_value={2} />
            </section>
            <section className="mobile-applications-section">
                <h2 className='main-heading'>Applications</h2>
                <MobileApplications />

            </section>
            <section className="services-section">
                <ServicesSection />
            </section>

            <section className='home-insights-section'>
               <div className="home-insights">
            <h2 className='main-heading'>Insights</h2>
                <InsightsSection/> </div>
            </section>

            <section className='mobile-insights-section'>
               <div className="mobile-home-insights">
            <h2 className='main-heading'>Insights</h2>
                <MobileInsights/> </div>
            </section>
            <section className="contact-section">
                <ContactSection />
            </section> 
        </main>

     );
}

export default HomeView;