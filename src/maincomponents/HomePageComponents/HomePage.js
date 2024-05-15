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
            <h2 className="mission-text-title">Our Mission.</h2>
            <p>
              The ICNA Nassau Community Center has been a social, cultural, and
              religious epicenter of the Long Island community for over six years.
              Our programs, services, and activities are designed based on the
              needs and wants expressed by our community over the years.
            </p>
          </div>
          s
          <div className="mission-image">
            <img src={require("./branchfive.png")} alt="Mission Image" />
          </div>
        </div>
        <Link to="section3" smooth={true} duration={500}>
          Scroll Down
        </Link>
      </div>

      <div className="section" id="section3">
        <div className = "contact">
        <h1>Contact Us!</h1>
        </div>
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
