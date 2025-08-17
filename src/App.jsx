
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="landing-title-container">
        <div className="main-logo">
          {/* Replace the src below with your logo image path */}
            <img
              src="./src/images/New Lomdei Logo.png"
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
                  <span role="img" aria-label="Book" style={{fontSize: '4rem'}}>📚</span>
                  </div>
                  <div className="program-desc">Powerful <b>platform</b>, seamlessly simple.</div>
                </a>
                <a className="program-square" href="#program2">
                  <div className="program-title">TailorED</div>
                  <div className="program-icon">
                    <span role="img" aria-label="Lightbulb" style={{fontSize: '4rem'}}>💡</span>
                  </div>
                  <div className="program-desc">Customized <b>coaching</b>, transformative teaching.</div>
                </a>
                <a className="program-square" href="#program3">
                  <div className="program-title">StandardED</div>
                  <div className="program-icon">
                    <span role="img" aria-label="Star" style={{fontSize: '4rem'}}>⭐</span>
                  </div>
                  <div className="program-desc">Coming soon!</div>
                </a>
            </div>
          </div>
        </div>
    </div>
   
  );
}

export default App;
