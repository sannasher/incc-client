// incc/src/maincomponents/AboutPageComponents/AboutPage.js
// src/maincomponents/AboutPageComponents/AboutPage.js

import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="section-one">
        <div className="section-content">
          <div className="sub-section sub-section-one"></div>
          <div className="sub-section sub-section-two">

            <div className="subsectiontwo-image">
              <h1 className = "ourteam">Meet Our Team</h1>
          </div>


          </div>
          <div className="sub-section sub-section-three"></div>
        </div>
      </section>
      <section className="section-two">
        <div className="section-content">
          {/* Content for the second section */}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
