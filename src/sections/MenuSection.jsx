import React from 'react';
import { motion } from 'framer-motion';

const MenuSection = () => {
  return (
    <section id="menu" style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--color-bg-secondary)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
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
            Curated Taste
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '1.5rem',
            color: 'var(--color-text)'
          }}>
            Food & <span className="gold-text-gradient">Drinks</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.8,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Indulge in a curated restaurant and bar experience designed for elegant evenings and vibrant nights. Enjoy flavorful dishes, premium drinks, bottle service, and a lounge setting made for conversation, celebration, and style.
          </p>
        </motion.div>

        {/* Temporary layout for menu highlight */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item * 0.2 }}
              className="glass-panel"
              style={{
                aspectRatio: '4/3',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(20,25,40,0.8), rgba(10,12,18,0.9))',
                border: '1px solid rgba(212, 175, 55, 0.15)'
              }}
            >
              <h3 style={{ color: 'var(--color-gold)', opacity: 0.6 }}>[ Menu Image or Menu List ]</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: '4rem' }}
        >
          <a href="#book" style={{
            color: 'var(--color-text)',
            borderBottom: '1px solid var(--color-gold)',
            paddingBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: '600',
            fontSize: '0.9rem'
          }}>
            View Full Menu
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default MenuSection;
