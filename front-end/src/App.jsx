import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import  Events from './pages/Events.jsx';
import Footer from './components/footer';
import Programmes from './pages/Programmes.jsx';
import Parrains from './pages/Parrains.jsx';
import Mecenat from './pages/Mecenat.jsx';
import Actus from './pages/Actus.jsx';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/evenement" element={<Events/>}/>
        <Route path="/programmes" element={<Programmes/>}/>
        <Route path="/parrains" element={<Parrains/>}/>
        <Route path="/mecenat" element={<Mecenat/>}/>
        <Route path="/actualite" element={<Actus/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>


      
      </Router>
  );
}

export default App;
