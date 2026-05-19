import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import AboutUs from './pages/AboutUs';

import Contact from './pages/Contact';
import AllTraditional from './pages/AllTraditional';
import AllHealthMix from './pages/AllHealthMix';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />


          {/* Contact Page Route */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/all-traditional" element={<AllTraditional />} />
          <Route path="/all-health-mix" element={<AllHealthMix />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;