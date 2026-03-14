import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: isScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'var(--glass-blur)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'var(--glass-blur)' : 'none',
        borderBottom: isScrolled ? `1px solid var(--glass-border)` : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h1 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          margin: 0,
          fontFamily: 'var(--font-heading)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          VBO <span className="gold-text-gradient">London</span>
        </h1>
      </div>

      {/* Desktop Nav */}
      <div style={{ 
        display: 'none', 
        '@media (min-width: 768px)': { display: 'flex' },
        gap: '2.5rem',
        alignItems: 'center'
      }} className="desktop-nav">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} style={{ 
            fontSize: '0.9rem', 
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--color-text)'
          }}>
            {link.name}
          </a>
        ))}
        <a href="#book" style={{
          background: 'linear-gradient(135deg, var(--color-gold-light) 0%, var(--color-gold) 50%, var(--color-gold-dark) 100%)',
          color: 'var(--color-navy)',
          padding: '0.8rem 1.8rem',
          borderRadius: '2px',
          fontWeight: '600',
          fontSize: '0.9rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          border: 'none',
          cursor: 'pointer'
        }}>
          Book Now
        </a>
      </div>
      
      {/* Mobile Toggle Placeholder */}
      <div className="mobile-toggle" style={{ display: 'block', cursor: 'pointer' }}>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none', color: 'white' }}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-toggle { display: none !important; }
          .desktop-nav { display: flex !important; margin-left: auto; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navigation;
