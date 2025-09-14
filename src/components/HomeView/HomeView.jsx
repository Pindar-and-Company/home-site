import './HomeView.css'
import ApplicationsGrid from '../ApplicationsSection/ApplicationsCard';
import ContactSection from '../ContactUsCard/ContactUsCard';
import ServicesSection from '../ServicesCard/ServicesCard'
import InsightsSection from '../InsightsSection/InsightsSection'
import backgroundImg from '../../assets/baltimore-hero.png'
import { Link } from "react-router-dom";

function HomeView() {
    return ( 

        <main id="home_view">
             <section className="main-hero">
            <img 
            
                src={backgroundImg}
                alt="logo" 
                className="background-img" />
                <div className="dark-overlay"></div>
                
                <section className="intro-section">

                    <h1>Computer Vision Consulting</h1>
                    <p>We help you go from out of the box components
                    to custom solutions and design scalable systems that
                     remove obstacles to your project goals</p>

          
                    <button className="learn-more-button">
                    <Link to="" target="_blank">Learn More</Link> </button> </section>
            </section>
            
            <section className="applications-section">
                <h2 className='main-heading'>Applications</h2>
                <ApplicationsGrid slice_value={2} />
            </section>
            
            <section className="services-section">
                <ServicesSection />
            </section>

            <section className='insights-section'>
               <div className="home-insights">
            <h2 className='main-heading'>Insights</h2>
                <InsightsSection/> </div>
            </section>

            <section className="contact-section">
                <ContactSection />
            </section> 
        </main>

     );
}

export default HomeView;