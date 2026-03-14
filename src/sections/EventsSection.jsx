import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GlassWater, Music, Gift } from 'lucide-react';

const EventsSection = () => {
  const eventsInfo = [
    { icon: <Calendar size={iconSize} />, title: 'Private Bookings', desc: 'Spaces tailored for intimacy and exclusivity.' },
    { icon: <Gift size={iconSize} />, title: 'Celebrations', desc: 'Decor support, balloons, and cake orders.' },
    { icon: <Music size={iconSize} />, title: 'Vibrant Energy', desc: 'DJs on rotation and curated late-night sounds.' },
    { icon: <GlassWater size={iconSize} />, title: 'Party Packages', desc: 'Premium bottle service and tailored party food.' },
  ];

  return (
    <section id="events" style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--color-bg-primary)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}
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
            Celebrate Life's Best Moments
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '1.5rem',
            color: 'var(--color-text)'
          }}>
            Events & <span className="gold-text-gradient">Private Hire</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.8,
          }}>
            Celebrate life’s best moments at VBO. Whether you’re planning a birthday, wedding anniversary, girls’ night out, group party, or work night celebration, our venue offers the atmosphere, energy, and service to make it exceptional. 
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {eventsInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{
                padding: '3rem 2rem',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)'
              }}
            >
              <div style={{
                color: 'var(--color-gold)',
                marginBottom: '1.5rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#contact" className="glass-panel" style={{
            display: 'inline-block',
            padding: '1.2rem 3rem',
            borderRadius: '4px',
            color: 'var(--color-gold)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontSize: '1rem',
            border: '1px solid var(--color-gold)'
          }}>
            Enquire About Private Hire
          </a>
        </motion.div>

      </div>
    </section>
  );
};

// Extracted outer scope variable for cleaner mapping
const iconSize = 32;

export default EventsSection;
