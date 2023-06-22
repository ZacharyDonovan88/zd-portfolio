import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

// components
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

// pages
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";


function App() {
  return (
    <Router>
      <AnimatePresence>
        <div className="app">
          <Navbar />
          <main className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </Router>
  );
}


export default App;
