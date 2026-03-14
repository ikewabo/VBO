import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#030406',
      color: 'var(--color-text-muted)',
      padding: '4rem 2rem 2rem 2rem',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem',
        marginBottom: '4rem'
      }}>
        
        {/* Brand */}
        <div>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: '700', 
            margin: '0 0 1.5rem 0',
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text)'
          }}>
            VBO <span className="gold-text-gradient">London</span>
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '2rem' }}>
            London’s finest club, restaurant, bar and exclusive lounge. Elevating nightlife and dining in Enfield.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--color-gold)', opacity: 0.8 }}><Instagram size={20} /></a>
            <a href="#" style={{ color: 'var(--color-gold)', opacity: 0.8 }}><Facebook size={20} /></a>
            <a href="#" style={{ color: 'var(--color-gold)', opacity: 0.8 }}><Twitter size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Explore</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><a href="#about">About VBO</a></li>
            <li><a href="#menu">Food & Drinks</a></li>
            <li><a href="#events">Private Hire</a></li>
            <li><a href="#weekly">What's On</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Opening Hours</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Thursday</span>
              <span>6PM - 2AM</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Friday - Saturday</span>
              <span>6PM - 4AM</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Sunday</span>
              <span>4PM - 1AM</span>
            </li>
          </ul>
        </div>

      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '0.85rem'
      }}>
        <p>&copy; {new Date().getFullYear()} VBO London. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
