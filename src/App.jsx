import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CounterNumber from './CounterNumber';
import MasterEd from './pages/MasterEd';
import HomePage from './pages/Home';
import TailoreEd from './pages/TailoreEd';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mastered" element={<MasterEd />} />
        <Route path="/tailored" element={<TailoreEd />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
