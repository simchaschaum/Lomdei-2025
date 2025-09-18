import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './TailorEd.css';

const TailoreEd = ({ imagesPath }) => {
  return (
    <div className="page-container mastered-page">
      <main className="mastered-main" id='platform-intro'>
        <div className="mastered-content" >
          <h1 className="mastered-title">TailorED</h1>
          <h3 className="mastered-subtitle">Customized coaching, transformative teaching</h3>
          <p className="mastered-desc">Lomdei’s professional development and coaching empowers educators to create personalized Jewish learning experiences with or without the use of technology, accessible to all students. We tailor to curricular needs and values of Jewish day schools and yeshivos.</p>
        </div>
      </main>
      <main className='mastered-main' id='platform-features'>
          <div className="mastered-features">
            <h2 className="mastered-subtitle">PROGRAM FEATURES</h2>
            <ul className="features-list">
              <li className="feature-item">
                <img className="feature-icon" src={imagesPath + '/arrow-icon.png'} alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>RELEVANT INSTRUCTIONAL MODELS</b></span><br />
                  <span className="feature-desc">Delivering innovative teaching strategies in a culturally sensitive and relevant way to Jewish schools.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src={imagesPath + '/check-icon.png'} alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>NURTURING PROFESSIONAL EXCELLENCE</b></span><br />
                  <span className="feature-desc">Providing schools with a guided framework to effectively create an ongoing growth minded culture in professional development and coaching.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src={imagesPath + '/handshake-icon.png'} alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>STRATEGIC COACHING PARTNERSHIPS</b></span><br />
                  <span className="feature-desc">Matching our diverse team of coaches with teachers to maximize success.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src={imagesPath + '/graduate-icon.png'} alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>REACHING EVERY CHILD</b></span><br/>
                  <span className="feature-desc">Personalized platform support all year round.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src={imagesPath + '/bullseye-icon.png'} alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>COLLABORATIVE GOAL SETTING</b></span><br />
                  <span className="feature-desc">Facilitating a professional partnership with school leadership and teachers to create clearly defined and achievable goals.</span>
                </span>
              </li>
              <li className="feature-item">
                <img className="feature-icon" src={imagesPath + '/learning-together-icon.png'} alt="icon" />
                <span className="feature-text">
                  <span className="feature-title"><b>LEARNING TOGETHER</b></span><br />
                  <span className="feature-desc">Creating a professional learning community of like minded educators who will share, learn and collaborate.</span>
                </span>
              </li>
            </ul>
          </div>
  
      </main>
      <main className="impact-main">
        <div className="impact-content">
          <h2 className="impact-title mastered-subtitle">PROGRAM IMPACT</h2>
          <div className='blue-background'>
            <div className='impact-text'>
                <p className="impact-desc">High Level of <b>Engagement</b></p>
                <p className="impact-desc">Teacher Achievement and <b>satisfaction</b></p>
                <p className="impact-desc">Fulfillment and <b>accomplishment</b> in the Learning Process</p>
                <p className="impact-desc">Successful <b>Student Centered</b> Learning</p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TailoreEd;
