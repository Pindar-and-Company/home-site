// src/App.jsx
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./components/HomeView/HomeView";
import Navbar from "./components/Navbar/Navbar";
import ApplicationsPage from "./components/ApplicationsPage/ApplicationsPage";
import InsightsPage from "./components/InsightsPage/InsightsPage";
import ApplicationCases from './components/ApplicationCases/ApplicationCases';

import InsightArticles from './components/InsightArticles/InsightArticles';
import AboutUsPage from "./components/AboutUsPage/AboutPage";
import Footer from "./components/Footer/Footer";
import ServicesPage from "./components/ServicesPage/Services";
import ScrollToTop from './ScrollToTop';
import ContactPage from './components/ContactPage/ContactPage'


function App() {

  return (
    <div id="root">
    <Router>
    <ScrollToTop />
      <Navbar />
      <div class="bg-fixed"></div>
      <div className="content">
        <Routes >
          <Route path="/" element={<HomeView />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
           <Route path="/insight/:id?" element={<InsightArticles />} /> 
           <Route path="/application/:id?" element={<ApplicationCases />} /> 
          <Route path="/services/:tag?" element={<ServicesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />

        </Routes>
      </div>
      <Footer /> 
    </Router>
    </div>

  );
}

export default App;
