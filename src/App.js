import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

import AllSweets from "./pages/AllSweets";
import AllTraditional from './pages/AllTraditional';
import AllHealthMix from './pages/AllHealthMix';
import AllCollections from './pages/AllCollections';

import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Collections */}
          <Route path="/all-collections" element={<AllCollections />} />   
          <Route path="/sweets" element={<AllSweets />} />
          <Route path="/all-traditional" element={<AllTraditional />} />
          <Route path="/all-health-mix" element={<AllHealthMix />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;