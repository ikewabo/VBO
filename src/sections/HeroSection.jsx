import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // The video duration is ~16 seconds
  const videoTime = useTransform(scrollYProgress, [0, 1], [0, 16.0]);

  const [playCount, setPlayCount] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const targetPlayCount = 2; // Play 2 loops before scrolling takes over

  const handleVideoEnded = () => {
    if (!isAutoPlaying || !videoRef.current) return;
    
    setPlayCount(prev => {
      const newCount = prev + 1;
      if (newCount >= targetPlayCount) {
        setIsAutoPlaying(false);
      } else {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
      return newCount;
    });
  };

  // Scroll-linked logic (only active after autoplay finishes)
  useEffect(() => {
    if (isAutoPlaying || !videoRef.current) return;

    const updateFrame = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = videoTime.get();
      }
    };
    
    // Set initial frame based on scroll instantly when switching modes
    updateFrame();
    
    const unsubscribe = videoTime.on("change", updateFrame);
    return () => unsubscribe();
  }, [videoTime, isAutoPlaying]);

  return (
    <div ref={containerRef} style={{ height: '1200vh', position: 'relative' }}>
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg-primary)'
      }}>
        {/* Sequence Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <video 
            ref={videoRef}
            src="/video/hero.mp4" 
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="hero-video-bg"
          />
        </div>

        {/* Content Container */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 2rem',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: isAutoPlaying ? 50 : 0, 
              opacity: isAutoPlaying ? 0 : 1 
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              padding: '3rem',
              borderRadius: '24px',
              maxWidth: '800px',
              background: 'rgba(5, 5, 5, 0.4)', // Subtle dark tint for text legibility 
              backdropFilter: 'blur(8px)', // Blur to separate text from raw video
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            <motion.h1 style={{
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: 'var(--color-text)'
            }}>
              Where London <br/>
              <span className="gold-text-gradient">Celebrates in Style</span>
            </motion.h1>
            
            <motion.p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              marginBottom: '2.5rem',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 2.5rem auto'
            }}>
              VBO London is your destination for elevated dining, unforgettable nightlife, and beautifully hosted private celebrations in Enfield.
            </motion.p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#book" style={{
                background: 'linear-gradient(135deg, var(--color-gold-light) 0%, var(--color-gold) 50%, var(--color-gold-dark) 100%)',
                color: 'var(--color-navy)',
                padding: '1rem 2.5rem',
                borderRadius: '4px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '1rem'
              }}>
                Book a Table
              </a>
              <a href="#events" className="glass-panel" style={{
                padding: '1rem 2.5rem',
                borderRadius: '4px',
                color: 'var(--color-text)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '1rem',
                border: '1px solid var(--color-gold-dark)',
                background: 'transparent'
              }}>
                Reserve Your Event
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10
          }}
        >
          <div style={{ 
            width: '1px', 
            height: '40px', 
            background: 'linear-gradient(to bottom, var(--color-gold), transparent)',
            margin: '0 auto'
          }} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
