import React from 'react';
import { FaShieldAlt, FaLock, FaGlobe, FaBolt, FaServer, FaUserShield } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: 'Military-Grade Encryption',
      description: 'Protect your data with AES-256 encryption used by banks and governments worldwide.'
    },
    {
      icon: FaLock,
      title: 'Strict No-Logs Policy',
      description: 'Your online activities remain private with verified zero-logs policies.'
    },
    {
      icon: FaGlobe,
      title: 'Global Server Network',
      description: 'Access content from anywhere with thousands of servers in 100+ countries.'
    },
    {
      icon: FaBolt,
      title: 'Lightning-Fast Speeds',
      description: 'Stream, download, and browse without buffering or speed limitations.'
    },
    {
      icon: FaServer,
      title: 'Unlimited Bandwidth',
      description: 'No data caps or restrictions - use your VPN as much as you want.'
    },
    {
      icon: FaUserShield,
      title: 'Kill Switch Protection',
      description: 'Automatic connection protection if your VPN drops unexpectedly.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose a Premium VPN?</h2>
          <p className="section-subtitle">
            Protect your privacy and unlock the full potential of the internet
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon-wrapper">
                  <IconComponent className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

