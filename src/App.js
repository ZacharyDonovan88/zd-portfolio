import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

// components
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import About from "./pages/About.js";


function App() {
  return (
    <Router>
      <>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
