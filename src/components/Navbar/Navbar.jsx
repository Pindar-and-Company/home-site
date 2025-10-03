
import logo from "../../assets/pindar-logo.png";
import HamburgerMenuIcon from "@mui/icons-material/Menu";
import route_names from "../../data_obj/RouteNames";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileSlidingMenu from "../MobileSlidingMenu/MobileSlidingMenu";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenuDisplay() {
    if (window.innerWidth <= 830) {
      setIsMobileMenuOpen(true);
    } else {
      setIsMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    toggleMenuDisplay();
    window.addEventListener("resize", toggleMenuDisplay);

    return () => {
      window.removeEventListener("resize", toggleMenuDisplay);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Pindar logo" className="navbar__icon" />
      </Link>
      {!isMobileMenuOpen && (
        <ul className="navbar__desktop-menu">
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to={route_names.services}>
            Services
            </Link>
          </li><li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to={route_names.applications}>
            Applications
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to={route_names.about_us}>
              About Us
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to={route_names.insights}>
              Insights
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <button className="nav-contact-button"> 
            <Link className="navbar__link" to={route_names.contact}>
              Contact Us
            </Link></button>
          </li>
          
          
         
        </ul>
      )}
      {isMobileMenuOpen && (
        <MobileSlidingMenu
          buttonId="mobileNavEventsButton"
          menuId="mobileNavEventsMenu"
          buttonIcon={<HamburgerMenuIcon fontSize="large" />}
          menuItems={[
            {
              name: "Services",
              id: "mobileServicesBtn",
              handleClick: () => {
                navigate(route_names.services);
              },
            },
            {
              name: "Applications",
              id: "mobileApplicationsBtn",
              handleClick: () => {
                navigate(route_names.applications);
              },
            },
            {
              name: "About Us",
              id: "mobileAboutUsBtn",
              handleClick: () => {
                navigate(route_names.about_us);
              },
            },
            {
              name: "Insights",
              id: "mobileInsightsBtn",
              handleClick: () => {
                navigate(route_names.insights);
              },
            },
            {
              name: "Contact Us",
              id: "mobileContactBtn",
              handleClick: () => {
                navigate(route_names.contact);
              },
            },
            
           
          ]}
        ></MobileSlidingMenu>
      )}
    </nav>
  );
}

export default Navbar;
