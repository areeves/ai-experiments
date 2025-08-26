

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ConfigPage from './pages/Config';
import HighImperialTranslator from './pages/HighImperialTranslator';
import ScrubberPage from './pages/ScrubberPage';

import { FaHome, FaCog, FaEraser } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
            <Link to="/" className="nav-link">{FaHome({ style: { marginRight: 8 } })}Home</Link>
            <Link to="/translator" className="nav-link">{MdTranslate({ style: { marginRight: 8 } })}High Imperial Translator</Link>
            <Link to="/config" className="nav-link">{FaCog({ style: { marginRight: 8 } })}Config</Link>
            <Link to="/scrubber" className="nav-link">{FaEraser({ style: { marginRight: 8 } })}AI Text Scrubber</Link>
        </nav>
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/translator" element={<HighImperialTranslator />} />
              <Route path="/config" element={<ConfigPage />} />
              <Route path="/scrubber" element={<ScrubberPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
