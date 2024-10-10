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
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/actions" element={<ActionsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/news" element={<NewsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
