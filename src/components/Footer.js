import React from 'react';
import { FaShieldAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaShieldAlt className="logo-icon" />
              <span className="logo-text">VPNDeals</span>
            </div>
            <p className="footer-description">
              Your trusted source for the best VPN deals and discounts. 
              Compare premium VPN services and save up to 85% on subscriptions.
            </p>
            <div className="security-badge">
              <FaLock className="security-icon" />
              <span>Secure & Trusted</span>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#comparison">Compare VPNs</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">VPN Services</h3>
            <ul className="footer-links">
              <li><a href="#nordvpn">NordVPN Deals</a></li>
              <li><a href="#surfshark">Surfshark Deals</a></li>
              <li><a href="#expressvpn">ExpressVPN Deals</a></li>
              <li><a href="#all">All VPN Deals</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>support@vpndeals.com</span>
              </div>
            </div>
            <p className="footer-note">
              We respond within 24 hours
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} VPNDeals. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span>|</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

