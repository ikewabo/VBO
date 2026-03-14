import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="book" style={{
      padding: '8rem 2rem',
      backgroundColor: 'var(--color-bg-secondary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Blur */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '4rem'
      }}>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
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
            Reserve Your Night
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '1.5rem',
            color: 'var(--color-text)'
          }}>
            Contact & <br/>
            <span className="gold-text-gradient">Reservations</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.8,
            marginBottom: '3rem'
          }}>
            Ready to book your next unforgettable night? Reserve your table, plan your event, or enquire about private hire today.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--color-gold)', marginTop: '0.2rem' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Location</h4>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  1–3 Northampton Road,<br/>
                  Enfield, EN3 7UL,<br/>
                  London, England
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--color-gold)', marginTop: '0.2rem' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Reservation Phone</h4>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  0747 9531371
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel"
          style={{
            padding: '3rem',
            borderRadius: '24px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)'
          }}
        >
          <h3 style={{
            fontSize: '1.8rem',
            marginBottom: '2rem',
            color: 'var(--color-text)',
            fontFamily: 'var(--font-heading)'
          }}>
            Inquiry Form
          </h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="Full Name" 
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
                outline: 'none',
                fontFamily: 'var(--font-body)'
              }}
            />
            <div style={{ display: 'flex', gap: '1.5rem', flexDirection: 'row', flexWrap: 'wrap' }}>
               <input 
                type="text" 
                placeholder="Phone / WhatsApp" 
                style={{
                  flex: '1 1 150px',
                  padding: '1rem',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  outline: 'none',
                  fontFamily: 'var(--font-body)'
                }}
              />
              <input 
                type="date" 
                style={{
                  flex: '1 1 150px',
                  padding: '1rem',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: 'rgba(255,255,255,0.6)',
                  outline: 'none',
                  fontFamily: 'var(--font-body)'
                }}
              />
            </div>
            <select style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'rgba(255,255,255,0.6)',
                outline: 'none',
                fontFamily: 'var(--font-body)',
                appearance: 'none'
            }}>
              <option value="">Select Inquiry Type</option>
              <option value="table">Table Reservation</option>
              <option value="birthday">Birthday Celebration</option>
              <option value="private">Private Space Hire</option>
              <option value="other">Other Inquiry</option>
            </select>
            <textarea 
              placeholder="Additional details..." 
              rows={4}
              style={{
                width: '100%',
                padding: '1rem',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: 'white',
                outline: 'none',
                fontFamily: 'var(--font-body)',
                resize: 'none'
              }}
            />
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
              <button 
                type="button" 
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, var(--color-gold-light) 0%, var(--color-gold) 50%, var(--color-gold-dark) 100%)',
                  color: 'var(--color-navy)',
                  padding: '1.2rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                Make a Reservation
              </button>
              <button 
                type="button"
                className="glass-panel" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.2rem',
                  borderRadius: '8px',
                  border: '1px solid var(--color-gold-dark)',
                  color: 'var(--color-text)',
                  background: 'transparent',
                  cursor: 'pointer'
                }}>
                <MessageSquare size={20} />
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
