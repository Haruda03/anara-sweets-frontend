import React, { useState } from 'react';
import '../styles/footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; // add your logo

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-section">
          <h3 className="section-title">About Us</h3>
          {/* <h2 className="celebration-title">Bring home a celebration</h2> */}
          <p className="story-text">
            A story that began in 2004 is now a beloved and trusted name in homes
            across Tamil Nadu with more than 40+ outlets and counting.
          </p>

          {/* Logo */}
          <img src={logo} alt="Anara Sweets" className="footer-logo" />
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="section-title">Quick links</h3>
          <ul className="links-list">
            <li>Search</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Service</li>
            <li>Story Telling</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <p className="support-text">
            If you haven't received information about your order after placing it,
            please get in touch with us at Customer Support:
          </p>
          <p className="phone-numbers">
            +94 75 275 3522 <br />
            
          </p>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3 className="welcome-title">Welcome to Anara Sweets!</h3>
          <p className="newsletter-text">
            Sign up and stay updated on our special offers and latest launches
          </p>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">SIGN UP</button>
          </form>

          {/* Social Icons */}
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 Anara Sweets. Powered by Shopify
      </div>
    </footer>
  );
};

export default Footer;