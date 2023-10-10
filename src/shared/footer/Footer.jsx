import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="news-letter">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div>
          <p>Subscribe to our newsletter for updates</p>

          <div className="input-button">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
          </div>

        </div>
      </div>

      <div className="about">
        <p>About</p>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy and Policy</li>
          <li>Site Map</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="social-media">
        <p>Social Media</p>
        <ul>
          <li>Facebook</li>
          <li>YouTube</li>
          <li>LinkedIn</li>
          <li>What'sApp</li>
        </ul>
      </div>
      <div className="download">
        <p>Download</p>
        <ul>
          <li>Download Link-1</li>
          <li>Download Link-1</li>
          <li>Download Link-1</li>
          <li>Download Link-1</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
