import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div className="footer-col left-col">
          <img src="/Lomdei-2025/images/New Lomdei Logo.png" alt="Lomdei Logo" className="footer-logo" />
          <div className="footer-text">©2025 Lomdei <br />
        All Rights Reserved
        </div>
        </div>
        <div className="footer-col center-col">
          <div className="footer-center-section">
            <div className="footer-center-text">Proud Partners</div>
            <div className="footer-center-logo">
              <img src="/public/images/Mayberg Logo.png" alt="Mayberg Logo" className="footer-partner-logo" />
            </div>
            <div className="footer-center-logo">
              <img src="/public/images/Deep Logo.png" alt="Deep Logo" className="footer-partner-logo" />
            </div>
          </div>
        </div>
        <div className="footer-col right-col">
          <div className="footer-right-columns">
            <div className="footer-right-col">
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Coaching</a>
              <a href="#" className="footer-link">Digital Platform </a>
            </div>
            <div className="footer-right-col">
              <a href="#" className="footer-link">Title Dollars</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
