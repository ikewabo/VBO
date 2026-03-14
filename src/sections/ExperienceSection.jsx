import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--color-bg-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel"
          style={{
            aspectRatio: '4/5',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(45deg, #0a0c10, #151a26)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
        >
          <span style={{ color: 'var(--color-gold)', opacity: 0.5 }}>[ Lifestyle/Ambiance Image ]</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            Unmatched Atmosphere
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            marginBottom: '2rem',
            color: 'var(--color-text)',
            lineHeight: 1.1
          }}>
            Signature VBO <br />
            <span className="gold-text-gradient">Experience</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            More than a venue, VBO is an experience. Expect luxe interiors, rich mood lighting, polished service, vibrant music, and an atmosphere designed for guests who appreciate style, comfort, and premium nightlife. Every detail should feel intentional, elevated, and camera-ready.
          </p>
          
          <a href="#gallery" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, var(--color-gold-light) 0%, var(--color-gold) 50%, var(--color-gold-dark) 100%)',
            color: 'var(--color-navy)',
            padding: '1rem 2.5rem',
            borderRadius: '4px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontSize: '0.9rem'
          }}>
            View Gallery
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;
