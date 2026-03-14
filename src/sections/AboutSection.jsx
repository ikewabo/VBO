import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--color-bg-secondary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Gold Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span style={{
            color: 'var(--color-gold)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '0.9rem',
            fontWeight: '600',
            display: 'block',
            marginBottom: '1rem'
          }}>
            Welcome to VBO
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '2rem',
            lineHeight: 1.1,
            color: 'var(--color-text)'
          }}>
            An Ultra-Premium <br />
            <span className="gold-text-gradient">Experience</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.8,
            marginBottom: '1.5rem'
          }}>
            Welcome to VBO London — an ultra-premium restaurant, bar, and exclusive lounge crafted for memorable nights, bold celebrations, and refined social experiences. 
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.8,
            marginBottom: '2.5rem'
          }}>
            From intimate dinners to vibrant late-night gatherings, VBO blends luxury ambience, music, food, and hospitality into one unforgettable destination.
          </p>
          
          <a href="#menu" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--color-gold)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontSize: '0.9rem',
            borderBottom: '1px solid var(--color-gold)',
            paddingBottom: '0.2rem'
          }}>
            Discover the menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel"
          style={{
            aspectRatio: '3/4',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* We will inject a real image here. For now a luxury placeholder gradient */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #0a0c10, #1a1f2e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
             <span style={{ color: 'var(--color-gold)', opacity: 0.5 }}>[ Luxury Image Placeholder ]</span>
          </div>
          
          {/* Subtle overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '24px',
            pointerEvents: 'none'
          }} />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
