import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ imagesPath }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link to="/" className="header-logo-link" onClick={handleMenuClose}>
        <img alt='lomdei logo' src={imagesPath + '/New Lomdei Logo.png'} className="header-logo" />
      </Link>
      <nav className="header-nav">
        <a href="#about" className="header-link">About Us</a>
        <Link to="/tailored" className="header-link">Coaching</Link>
        <Link to="/mastered" className="header-link">Digital Platform</Link>
        <a href="#title-dollars" className="header-link">Title Dollars</a>
        <Link to="/contact" className="header-link">Contact</Link>
        <a href="#login" className="header-link">LOG IN</a>
      </nav>
      <button className="hamburger-menu" onClick={handleMenuToggle} aria-label="Open menu">
        <span className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" className="mobile-menu-link" onClick={handleMenuClose}>About Us</a>
          <Link to="/tailored" className="mobile-menu-link" onClick={handleMenuClose}>Coaching</Link>
          <Link to="/mastered" className="mobile-menu-link" onClick={handleMenuClose}>Digital Platform</Link>
          <a href="#title-dollars" className="mobile-menu-link" onClick={handleMenuClose}>Title Dollars</a>
          <Link to="/contact" className="mobile-menu-link" onClick={handleMenuClose}>Contact</Link>
          <a href="#login" className="mobile-menu-link" onClick={handleMenuClose}>LOG IN</a>
        </div>
      )}
    </header>
  );
};

export default Header;
