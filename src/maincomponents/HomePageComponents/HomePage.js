// incc/src/maincomponents/HomePageComponents/HomePage.js

import React, { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import { Link } from "react-scroll";
import CenterHours from "./CenterHours";
import $ from "jquery";

function HomePage() {
  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!");
    // const sections = document.querySelectorAll(".section");

    // const handleScroll = () => {
    //   sections.forEach((section) => {
    //     const bounding = section.getBoundingClientRect();
    //     if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
    //       section.classList.add("active");
    //     } else {
    //       section.classList.remove("active");
    //     }
    //   });
    // };

    // window.addEventListener("scroll", handleScroll);

    console.log("eouhfouhrouewifhoiuwhefohwh");

    $("#sectiononelefttop").css("margin-left", 0);
    console.log($("sectiononelefttop"));

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <div className="homepage">
      <div className="section sectionone" id="section1">
        <div className="sectiononeleft">
          <div className="sectiononelefttop" id="sectiononelefttop">
            <h1 className="icnanassauword">ICNA NASSAU</h1>
            <h1 className="communityword">COMMUNITY</h1>
            <h1 className="centerword">CENTER</h1>
            <h2 className="hereword"> Here for You</h2>
          </div>
        </div>

        <div className="sectiononeright">
          <CenterHours /> {/* Include the CenterHours component */}
        </div>

        <Link to="section2" smooth={true} duration={500}></Link>
      </div>

      <div className="section" id="section2">
        <div className="divider"></div>
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mission-image">
            <img src={require("./branchfive.png")} alt="Mission Image" />
          </div>
        </div>
        <Link to="section3" smooth={true} duration={500}>
          Scroll Down
        </Link>
      </div>

      <div className="section" id="section3">
        <h1>Section 3</h1>
        <p>Welcome to Section 3</p>
        {/* Embed Google Form */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeUP5ixNKc7t-PpcyLrLtnkqsCFNH3jDOctBr1hcHdoNeEtKA/viewform?embedded=true"
          width="640"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
}

export default HomePage;
