import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link to="/" className="header-logo-link" onClick={handleMenuClose}>
        <img alt='lomdei logo' src={'/Lomdei-2025/images/New Lomdei Logo.png'} className="header-logo" />
      </Link>
      <nav className="header-nav">
        <Link to="/tailored" className="header-link">Coaching</Link>
        <Link to="/mastered" className="header-link">Digital Platform</Link>
        <Link to="/contact" className="header-link">Contact</Link>
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
          <Link to="/tailored" className="mobile-menu-link" onClick={handleMenuClose}>Coaching</Link>
          <Link to="/mastered" className="mobile-menu-link" onClick={handleMenuClose}>Digital Platform</Link>
          <Link to="/contact" className="mobile-menu-link" onClick={handleMenuClose}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
