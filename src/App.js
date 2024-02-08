import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Progress from "./assets/Progress.js"


// components
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

// pages
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Resume from "./pages/Resume.js";
import Particle from './components/Particle';
// import Work from "./pages/Work.js";

function App() {
  return (
    <Router>
      <AnimatePresence>
        <div className="app">
          <Navbar />
          <Progress/>
          <Particle />
          <main className="container">
            <Routes>
              <Route exact path="/zd-portfolio" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/About" element={<About />} />
              {/* <Route exact path="/Work" element={<Work />} /> */}
              <Route exact path="/Contact" element={<Contact />} />
              {/* <Route exact path="/Resume" element={<Resume />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </Router>
  );
}


export default App;
