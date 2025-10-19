import React from 'react';
import CounterNumber from '../CounterNumber';

function HomePage() {
  return (
    <div className="page-container">
      <div className="landing-title-container">
        <div className="main-logo">
          <img
            src="/images/New Lomdei Logo.png"
            alt="Lomdei Logo"
            className="lomdei-logo"
          />
          <h1>
            Lomdei bridges tradition and innovation, empowering educators to create personalized Jewish learning experiences accessible to all students.
          </h1>
        </div>
      </div>
      <div className="white-section">
        <div className="white-section-content">
          <h2 className="programs-title">OUR PROGRAMS</h2>
          <div className="programs-grid">
            <a className="program-square" href="#program1">
              <div className="program-title">MasterED</div>
              <div className="program-icon">
                <span role="img" aria-label="mastered" style={{fontSize: '4rem'}}>
                  <img src="/images/MasterEd-Icon.PNG" alt="MasterEd Book Icon" />
                </span>
              </div>
              <div className="program-desc">Powerful <b>platform</b>, seamlessly simple.</div>
            </a>
            <a className="program-square" href="#program2">
              <div className="program-title">TailorED</div>
              <div className="program-icon">
                <span role="img" aria-label="tailored" style={{fontSize: '4rem'}}>
                  <img src="/images/TailorEd-Icon.PNG" alt="TailorED Lightbulb Icon" />
                </span>
              </div>
              <div className="program-desc">Customized <b>coaching</b>, transformative teaching.</div>
            </a>
            <a className="program-square" href="#program3">
              <div className="program-title">StandardED</div>
              <div className="program-icon">
                <span role="img" aria-label="standard" style={{fontSize: '4rem'}}>
                  <img src="images/StandardEd-Icon.PNG" alt="StandardED Star Icon" />
                </span>
              </div>
              <div className="program-desc">Coming soon!</div>
            </a>
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="transparent-section">
          <h2 className="programs-title"><img src="/images/government-icon.png" alt="Government Grants Icon" />GOVERNMENT GRANTS</h2>
          <div className="government-grants-content">
            <div className="grants-boxes">
              <div className="grant-box">
                <img className='star-icon' alt='star-icon' src='/images/star-icon.png'></img>
                <h4>Title IIA Funding</h4>
                <p>Federal grants available for professional development and educational coaching programs.</p>
                <p>Title IIA dollars can be used towards professional development & coaching and for the MasterED Learning Platform</p>
              </div>
              <div className="grant-box">
                <img className='star-icon' alt='star-icon' src='/images/star-icon.png'></img>
                <h4>Title IV Funding</h4>
                <p>Federal grants specifically designated for educational software and technology solutions.</p>
                <p>Title IV dollars (Software) can be used towards the Lomdei Learning Platform</p>
              </div>
            </div>
            <a className="contact-box" href="/contact"><b>Contact</b> us for more information.</a>
          </div>
        </div>
        <div className="global-impact-section">
          <h2 className="programs-title"><img src="/images/globe-icon.png" alt="Global Impact Icon" />GLOBAL IMPACT</h2>
          <div className="global-impact-content">
            <p className="impact-subtitle">See Lomdei's reach across the world.</p>
            <div className="impact-counters">
              <div className="counter"><CounterNumber end={74} /> <span className="counter-label">schools</span></div>
              <div className="counter"><CounterNumber end={300} /> <span className="counter-label">teachers</span></div>
              <div className="counter"><CounterNumber end={8500} /> <span className="counter-label">students</span></div>
            </div>
            <div className="reviews-carousel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
