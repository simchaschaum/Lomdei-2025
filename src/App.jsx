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

const imagesPath = './src/images';

function App() {
  return (
    <Router>
      <Header imagesPath={imagesPath} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mastered" element={<MasterEd imagesPath={imagesPath} />} />
        <Route path="/tailored" element={<TailoreEd imagesPath={imagesPath} />} />
        <Route path="/contact" element={<Contact imagesPath={imagesPath} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
