import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  return (
    <section id="gallery" style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--color-bg-primary)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '5rem'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
              Visual Elegance
            </span>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '1.5rem',
              color: 'var(--color-text)'
            }}>
              Gallery & <span className="gold-text-gradient">Moments</span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.8,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Show the energy, elegance, and unforgettable moments that define VBO. An atmosphere designed for guests who appreciate premium nightlife.
            </p>
          </motion.div>
        </div>

        {/* Masonry-like Grid Placeholder */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          gridAutoRows: '300px'
        }}>
          {[1,2,3,4,5,6].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel"
              style={{
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(20,25,40,0.6), rgba(10,12,18,0.7))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.05)',
                gridRowEnd: i === 0 || i === 3 ? 'span 2' : 'span 1' // slightly jagged layout
              }}
            >
               <span style={{ color: 'var(--color-gold)', opacity: 0.3 }}>[ Gallery Image {item} ]</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
