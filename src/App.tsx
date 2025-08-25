
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
// ...existing code...
import ConfigPage from './pages/Config';
import HighImperialTranslator from './pages/HighImperialTranslator';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/translator" className="nav-link">High Imperial Translator</Link>
          <Link to="/config" className="nav-link">Config</Link>
        </nav>
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
// ...existing code...
            <Route path="/translator" element={<HighImperialTranslator />} />
            <Route path="/config" element={<ConfigPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
