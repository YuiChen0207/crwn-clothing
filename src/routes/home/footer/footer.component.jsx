import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarker,
} from "react-icons/fa";
import "./footer.component.scss";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <div className="icon-container">
        <a
          href="https://www.facebook.com/your-facebook-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="social-icon" />
        </a>
      </div>
      <div className="icon-container">
        <a
          href="https://www.twitter.com/your-twitter-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="social-icon" />
        </a>
      </div>
      <div className="icon-container">
        <a
          href="https://www.instagram.com/your-instagram-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="contact-information-container">
        <div className="contact-information">
          <FaPhone className="contact-icon" />
          <span className="contact-label">Phone:</span>
          <span className="contact-value">123-456-7890</span>
        </div>
        <div className="contact-information">
          <FaEnvelope className="contact-icon" />
          <span className="contact-label">Email:</span>
          <span className="contact-value">example@example.com</span>
        </div>
        <div className="contact-information">
          <FaMapMarker className="contact-icon" />
          <span className="contact-label">Address:</span>
          <span className="contact-value">123 Main Street, City, Country</span>
        </div>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
