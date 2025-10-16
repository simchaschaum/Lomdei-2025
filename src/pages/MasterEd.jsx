import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './MasterEd.css';

const MasterEd = () => {
  return (
    <div className="page-container mastered-page">
      <main className="mastered-main" id='platform-intro'>
        <div className="mastered-content" >
          <h1 className="mastered-title">MasterEd</h1>
          <h3 className="mastered-subtitle">Powerful platform, seamlessly simple.</h3>
          <p className="mastered-desc">MasterED is a powerful Limudei Kodesh educational digital tool focused on <b>skill building</b>, formative and summative <b>assessments</b> and rich <b>data</b> tracking for both teachers and students.</p>
        </div>
      </main>
      <main className='mastered-main' id='platform-features'>
        <div className="mastered-features">
            <h2 className="mastered-subtitle">PLATFORM FEATURES</h2>
            <ul className="features-list">
              <li className="feature-item">
                <img className="feature-icon" src='/Lomdei-2025/public/images/logo-book.png' alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>LIBRARY ACCESS</b></span><br />
                  <span className="feature-desc">Largest, Online, Limudei Kodesh library of skill building activities in all subjects.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src='/Lomdei-2025/public/images/logo-recycling.png' alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>CUSTOMIZABLE CONTENT</b></span><br />
                  <span className="feature-desc">Fully editable materials, allowing for personalization and differentiation of existing online assignments.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src='/Lomdei-2025/public/images/logo-location.png' alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>ANALYTICAL DATA</b></span><br />
                  <span className="feature-desc">Real time rich data for targeted teaching.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src='/Lomdei-2025/public/images/logo-phone.png' alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>ONGOING SUPPORT</b></span><br />
                  <span className="feature-desc">Personalized platform support all year round.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src='/Lomdei-2025/public/images/logo-star.png' alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>CUSTOM MATERIALS</b></span><br />
                  <span className="feature-desc">Collaborate with schools to create school-specific content to utilize on the platform.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src='/Lomdei-2025/public/images/logo-medal.png' alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>KOSHER DEVICES</b></span><br />
                  <span className="feature-desc">Sensitive to school’s technology policies.</span>
                </span>
              </li>
            </ul>
        </div>
      </main>
      <main className="impact-main">
        <div className="impact-content">
          <h2 className="impact-title mastered-subtitle">PLATFORM IMPACT</h2>
          <div className='blue-background'>
            <div className='impact-text'>
                <p className="impact-desc"><b>Personalized</b> Learning Experience</p>
                <p className="impact-desc"><b>Reduces</b> the Need for Remedial or Special Education</p>
                <p className="impact-desc">Provides Student <b>Accountability</b></p>
                <p className="impact-desc"><b>Motivates</b> students to succeed</p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MasterEd;
