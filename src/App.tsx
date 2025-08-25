
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';
import ConfigPage from './pages/Config';
import HighImperialTranslator from './pages/HighImperialTranslator';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/demo1" className="nav-link">Demo 1</Link>
          <Link to="/demo2" className="nav-link">Demo 2</Link>
          <Link to="/translator" className="nav-link">High Imperial Translator</Link>
          <Link to="/config" className="nav-link">Config</Link>
        </nav>
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo1" element={<Demo1 />} />
            <Route path="/demo2" element={<Demo2 />} />
            <Route path="/translator" element={<HighImperialTranslator />} />
            <Route path="/config" element={<ConfigPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
