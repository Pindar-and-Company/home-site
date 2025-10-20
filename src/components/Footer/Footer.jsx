import "./Footer.css";
import { Link  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/pindar-logo.png";
import route_names from "../../data_obj/RouteNames";


function Footer() {

  return (
    
    <footer>
 
      <section className="mini-footer">
        <div className="mini-footer-logo-container">
          <img
            src={logo}
            id="footer-logo"
            alt="Pindar logo"
          />
          </div>
        <div className="mini-footer-menu">
          <ul>
          <li>
              <Link to={route_names.services}>Services</Link>
           </li>
            
           <li>
              <Link to={route_names.applications}>Applications</Link>
           </li>
           <li>
              <Link to={route_names.about_us}>About Us</Link>
            </li>
            {/*
            <li>
              <Link to={route_names.insights}>Insights</Link>
            </li> 
            */}
            <li>
              <Link to={route_names.contact}>Contact Us</Link>
            </li>
            
          </ul>
        </div>
       
        <div>
        <p className="copyright">
          © 2025 Pindar & Company All rights reserved.
        </p>
        </div>
      </section>

      <section className="full-footer">
      <section className="top-half">
        <div className="footer-logo-container">
          <img
            src={logo}
            id="footer-logo"
            alt="Pindar logo"
          />
          <span className="email">
            <FontAwesomeIcon id="envelope" icon={faEnvelope} />{" "}
            <a href="mailto:valentine@pindarcompany.com"> valentine@pindarcompany.com</a>
          </span>
        </div>
        <div className="footer-links">
          <ul>
          
          <li>
              <Link to={route_names.services}>Services</Link>
           </li>
            
           <li>
              <Link to={route_names.applications}>Applications</Link>
           </li>
           <li>
              <Link to={route_names.about_us}>About Us</Link>
            </li>
            {/*
            <li>
              <Link to={route_names.insights}>Insights</Link>
            </li> 
                     */}
            <li>
              <Link to={route_names.contact}>Contact Us</Link>
            </li>
   
            
          </ul>
        </div>
      </section>
      <div className="bottom-half">
        <p className="copyright">
        © 2025 Pindar & Company All rights reserved.
        </p>
      
      </div>
      </section>
    </footer>

  );
}

export default Footer;