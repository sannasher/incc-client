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
        <div className="sectiontwo-content">
          <h2 className = "sectiontwo-content-title">We are there to help.</h2>
          <p>Our team has been working closely with a range of community leaders to address the challenges our community is facing.</p>
        </div>
        <div className="sectiontwo-else"></div>

        
      </section>

      
    </div>
  );
}

export default AboutPage;
