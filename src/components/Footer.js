import React from 'react';
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa'; // Added FaPhoneAlt
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-section logo-column">
          <img src={logo} alt="Anara Sweets" className="footer-logo" />
          <div className="social-icons-wrapper">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

  
        <div className="footer-section">
          <h3 className="section-title">About Us</h3>
          <p className="story-text standard-paragraph">
            A story that began in 2004 is now a beloved and trusted name in homes
            across Tamil Nadu with more than 40+ outlets and counting.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="section-title">Quick Links</h3>
          <ul className="links-list">
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-section contact-column">
          <h3 className="section-title">Customer Support</h3>
          <p className="support-text standard-paragraph">
            If you haven't received information about your order after placing it,
            please get in touch with us at:
          </p>
     
          <p className="phone-numbers">
            <FaPhoneAlt className="phone-icon" />
            <span>+94 75 275 3522</span>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Anara Sweets. Powered by Shopify</p>
      </div>
    </footer>
  );
};

export default Footer;