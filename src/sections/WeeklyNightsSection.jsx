import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const WeeklyNightsSection = () => {
  const events = [
    { day: 'Friday', name: 'Afro-Luxury Nights', desc: 'DJs on rotation blending Afrobeats, Amapiano, and RnB.' },
    { day: 'Saturday', name: 'Celebration Weekends', desc: 'The elite weekend turnaround. Bottle service highly recommended.' },
    { day: 'Sunday', name: 'Lounge & Unwind', desc: 'Intimate vibes, premium food, and sophisticated networking.' }
  ];

  return (
    <section id="weekly" style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--color-bg-secondary)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
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
            The Rhythm of VBO
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '1.5rem',
            color: 'var(--color-text)'
          }}>
            Weekly Nights <br/>
            & <span className="gold-text-gradient">What's On</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.8,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover the rhythm of VBO with themed nights, rotating DJs, celebration weekends, and special event experiences.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {events.map((event, index) => (
            <motion.div
              key={event.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-gold)',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                <Clock size={16} />
                {event.day}
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                color: 'var(--color-text)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)'
              }}>
                {event.name}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {event.desc}
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <a href="#book" style={{
                  color: 'var(--color-text)',
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                  paddingBottom: '2px',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Reserve List
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WeeklyNightsSection;
