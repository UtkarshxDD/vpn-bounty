import React from 'react';
import { FaStar, FaFire, FaShieldAlt, FaGlobe, FaLock, FaBolt, FaUsers, FaServer } from 'react-icons/fa';
import './VPNComparison.css';

const VPNComparison = () => {
  const vpns = [
    {
      id: 1,
      name: 'NordVPN',
      discount: '71% OFF',
      freeMonths: '3 months free',
      logo: '/images/Logo-NordVPN.png',
      badge: 'Best Overall',
      badgeColor: '#2563eb',
      features: [
        { icon: FaServer, text: '5,400+ Servers' },
        { icon: FaGlobe, text: '60+ Countries' },
        { icon: FaShieldAlt, text: 'Military-Grade Encryption' },
        { icon: FaBolt, text: 'Ultra-Fast Speeds' },
        { icon: FaUsers, text: '6 Simultaneous Devices' },
        { icon: FaLock, text: 'No-Logs Policy' }
      ],
      rating: 4.8,
      reviews: '12,000+',
      link: '#nordvpn-link'
    },
    {
      id: 2,
      name: 'Surfshark VPN',
      discount: '81% OFF',
      freeMonths: '2 months free',
      logo: '/images/surfshark-logo.svg',
      badge: 'Best Value',
      badgeColor: '#059669',
      features: [
        { icon: FaServer, text: '3,200+ Servers' },
        { icon: FaGlobe, text: '100+ Countries' },
        { icon: FaShieldAlt, text: 'AES-256 Encryption' },
        { icon: FaBolt, text: 'Unlimited Bandwidth' },
        { icon: FaUsers, text: 'Unlimited Devices' },
        { icon: FaLock, text: 'Strict No-Logs Policy' }
      ],
      rating: 4.7,
      reviews: '8,500+',
      link: '#surfshark-link'
    },
    {
      id: 3,
      name: 'ExpressVPN',
      discount: '70% OFF',
      freeMonths: '3 months free',
      logo: '/images/expressvpn-logo.svg',
      badge: 'Popular Choice',
      badgeColor: '#dc2626',
      features: [
        { icon: FaServer, text: '3,000+ Servers' },
        { icon: FaGlobe, text: '94+ Countries' },
        { icon: FaShieldAlt, text: 'Bank-Level Security' },
        { icon: FaBolt, text: 'High-Speed Network' },
        { icon: FaUsers, text: '5 Simultaneous Devices' },
        { icon: FaLock, text: 'Zero-Logs Guarantee' }
      ],
      rating: 4.6,
      reviews: '6,200+',
      link: '#expressvpn-link'
    }
  ];

  return (
    <section id="comparison" className="vpn-comparison">
      <div className="comparison-container">
        <div className="section-header">
          <h2 className="section-title">Compare the Best VPN Services</h2>
          <p className="section-subtitle">
            All plans include 30-day money-back guarantee and 24/7 customer support
          </p>
        </div>

        <div className="vpn-cards">
          {vpns.map((vpn) => (
            <div key={vpn.id} className="vpn-card">
              <div className="card-header">
                <div className="logo-container">
                  <img 
                    src={vpn.logo} 
                    alt={`${vpn.name} logo`} 
                    className={`vpn-logo ${vpn.name.toLowerCase().replace(/\s+/g, '-')}-logo`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="logo-fallback" style={{ display: 'none' }}>
                    <FaShieldAlt className="placeholder-logo" />
                    <span className="logo-label">{vpn.name}</span>
                  </div>
                </div>
                <div className="badge" style={{ backgroundColor: vpn.badgeColor }}>
                  <FaFire className="badge-icon" />
                  {vpn.badge}
                </div>
              </div>

              <div className="offer-section">
                <div className="offer-badge">
                  <span className="offer-text">GET {vpn.discount}</span>
                </div>
                <div className="offer-details">
                  <span className="offer-main">{vpn.name}</span>
                  <span className="offer-bonus">+ {vpn.freeMonths}</span>
                </div>
              </div>

              <div className="rating-section">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`star ${i < Math.floor(vpn.rating) ? 'filled' : ''}`}
                    />
                  ))}
                </div>
                <span className="rating-text">
                  {vpn.rating} ({vpn.reviews} reviews)
                </span>
              </div>

              <div className="features-list">
                {vpn.features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="feature-item">
                      <IconComponent className="feature-icon" />
                      <span>{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              <a
                href={vpn.link}
                className="deal-button"
                style={{ '--badge-color': vpn.badgeColor }}
              >
                Get This Deal Now
                <FaBolt className="button-icon" />
              </a>

              <div className="guarantee-text">
                <FaShieldAlt className="guarantee-icon" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VPNComparison;

