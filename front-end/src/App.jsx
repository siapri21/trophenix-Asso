import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Marquee from './components/Partenaires';
import AboutSection from './components/AboutSection';
import MissionSection from './components/MissionSection';
import ProgrammeSection from './components/ProgrammeSection';
import ParrainsSection from './components/ParrainsSection';
import EventSection from './components/Events';
import SectionDon from './components/SectionDon';
import AgirSections from './components/Agir';
import ActusSection from './components/Actus';
import ContactSection from './components/Contact';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Marquee />
      <AboutSection />
      <MissionSection/>
      <ProgrammeSection/>
      <ParrainsSection/>
      <EventSection/>
      <SectionDon/>
      <AgirSections/>
      <ActusSection/>
      <ContactSection/>
      <Footer/>


      
      </Router>
  );
}

export default App;
