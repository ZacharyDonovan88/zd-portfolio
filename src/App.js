import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

// components
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <Router>
      <>
        <Navbar />
          <Routes>
            <Route exact path="/Home" element={<Home />} />
          </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
