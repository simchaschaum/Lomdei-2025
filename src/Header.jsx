import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <img alt='lomdei logo' src='./src/images/New Lomdei Logo.png' className="header-logo" />
      <nav className="header-nav">
        <a href="#about" className="header-link">About Us</a>
        <a href="#coaching" className="header-link">Coaching</a>
        <a href="#digital" className="header-link">Digital Platform</a>
        <a href="#title-dollars" className="header-link">Title Dollars</a>
        <a href="#contact" className="header-link">Contact</a>
        <a href="#login" className="header-link">LOG IN</a>
      </nav>
    </header>
  );
};

export default Header;
