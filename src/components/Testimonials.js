import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'I\'ve been using NordVPN for over a year now and it\'s been amazing. The speeds are incredible and I love the peace of mind knowing my data is protected. The deal I got here with free months was fantastic!',
      vpn: 'NordVPN'
    },
    {
      name: 'Michael Chen',
      location: 'London, UK',
      rating: 5,
      text: 'Surfshark is perfect for my family. Unlimited devices means everyone can use it, and the deal with free months is unbeatable. Found the best offer on this site!',
      vpn: 'Surfshark'
    },
    {
      name: 'Emma Rodriguez',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'The comparison here helped me choose the right VPN. Great savings and the setup was super easy. Highly recommend checking out these deals!',
      vpn: 'ExpressVPN'
    },
    {
      name: 'David Thompson',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'I was skeptical at first, but these deals are legit. Got NordVPN with free months and it works perfectly. Customer service is also top-notch.',
      vpn: 'NordVPN'
    },
    {
      name: 'Lisa Anderson',
      location: 'Berlin, Germany',
      rating: 5,
      text: 'Surfshark\'s unlimited device feature is a game-changer. The money-back guarantee gave me confidence to try it, and I\'m so glad I did!',
      vpn: 'Surfshark'
    },
    {
      name: 'James Wilson',
      location: 'Los Angeles, USA',
      rating: 5,
      text: 'Fast, reliable, and secure. The deals on this website are the real deal. Got ExpressVPN with free months and couldn\'t be happier. Thank you!',
      vpn: 'ExpressVPN'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied customers who saved money on premium VPN services
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="user-info">
                  <div className="user-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="user-details">
                    <div className="user-name">{testimonial.name}</div>
                    <div className="user-location">{testimonial.location}</div>
                  </div>
                </div>
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star filled" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-vpn">
                Verified purchase: <strong>{testimonial.vpn}</strong>
              </div>
            </div>
          ))}
        </div>
        <div className="trust-indicators">
          <div className="trust-item">
            <div className="trust-number">500K+</div>
            <div className="trust-label">Happy Users</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">4.8/5</div>
            <div className="trust-label">Average Rating</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">$2M+</div>
            <div className="trust-label">Saved by Users</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

