
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import ConfigPage from './pages/Config';
import HighImperialTranslator from './pages/HighImperialTranslator';
import ScrubberPage from './pages/ScrubberPage';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/translator" className="nav-link">High Imperial Translator</Link>
          <Link to="/config" className="nav-link">Config</Link>
            <Link to="/scrubber" className="nav-link">AI Text Scrubber</Link>
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
