import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const [framesLoaded, setFramesLoaded] = useState(false);
  const framesCount = 384; // Extracted 384 frames from vbohero.mp4 at 24fps

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, framesCount]);
  const [currentImage, setCurrentImage] = useState('/frames/frame_0001.jpg');

  const [playCount, setPlayCount] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const targetPlayCount = 2; // Play 2 loops before scrolling takes over

  useEffect(() => {
    // Preload a few initial frames (reduced to 12 for instant mobile load)
    const preloadFrames = async () => {
      for (let i = 1; i <= Math.min(12, framesCount); i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(4, '0');
        img.src = `/frames/frame_${frameNum}.jpg`;
      }
      setFramesLoaded(true);
    };
    preloadFrames();
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    let currentFrame = 1;
    let intervalId;

    const playLoop = () => {
      intervalId = setInterval(() => {
        currentFrame++;
        if (currentFrame > framesCount) {
          currentFrame = 1;
          setPlayCount(prev => {
            const newCount = prev + 1;
            if (newCount >= targetPlayCount) {
              clearInterval(intervalId);
              setIsAutoPlaying(false);
            }
            return newCount;
          });
        }
        
        const frameNum = currentFrame.toString().padStart(4, '0');
        setCurrentImage(`/frames/frame_${frameNum}.jpg`);
      }, 1000 / 24); // Play at 24fps matching extraction
    };

    playLoop();

    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);

  // Scroll-linked logic (only active after autoplay finishes)
  useEffect(() => {
    if (isAutoPlaying) return;

    const updateFrame = () => {
      const current = Math.min(Math.max(1, Math.round(frameIndex.get())), framesCount);
      const frameNum = current.toString().padStart(4, '0');
      setCurrentImage(`/frames/frame_${frameNum}.jpg`);
    };
    
    // Set initial frame based on scroll instantly when switching modes
    updateFrame();
    
    const unsubscribe = frameIndex.on("change", updateFrame);
    return () => unsubscribe();
  }, [frameIndex, isAutoPlaying]);

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
          <img 
            src={currentImage} 
            alt="Hero Background Sequence" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 1 // No dimming or glare
            }}
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
