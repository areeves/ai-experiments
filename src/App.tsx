
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';


function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '1rem', background: '#282c34' }}>
          <Link to="/" style={{ color: '#61dafb', marginRight: '1rem' }}>Home</Link>
          <Link to="/demo1" style={{ color: '#61dafb', marginRight: '1rem' }}>Demo 1</Link>
          <Link to="/demo2" style={{ color: '#61dafb' }}>Demo 2</Link>
        </nav>
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo1" element={<Demo1 />} />
            <Route path="/demo2" element={<Demo2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
