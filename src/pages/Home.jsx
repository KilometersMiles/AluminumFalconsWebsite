// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { globalStyles, themeColors } from '../styles';
import LightningButton from '../components/LightningButton';
import createGlobe from 'cobe';
import { useInView } from 'react-intersection-observer';
import ScrollStat from '../components/ScrollStat.jsx';
import HoverCard from '../components/HoverCard.jsx';

export default function Home({ navigate }) {
  const markers = [
    { id: 'slc', location: [40.57, -111.89], label: 'Sandy, Utah' },
    {
      id: 'houston',
      location: [29.7604, -95.3698],
      label: 'World Championships, Houston, Texas',
    },
  ];
  const sponsors = [
    {
      name: 'Motorola Solutions',
      url: 'https://www.motorolasolutions.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Motorola_Solutions_Logo.svg/1920px-Motorola_Solutions_Logo.svg.png',
    },
    {
      name: 'Polymaker',
      url: 'https://polymaker.com',
      logo: 'https://polymaker.com/wp-content/uploads/polymaker-full-logo.svg',
    },
    {
      name: 'Dennis Group',
      url: 'https://dennisgroup.com',
      logo: 'https://dennisgroup.com/wp-content/uploads/2025/01/logo.svg',
    },
    {
      name: 'Caterpillar (CAT)',
      url: 'https://www.cat.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Caterpillar_logo.svg/1920px-Caterpillar_logo.svg.png',
    },
    {
      name: 'Canyon View Credit Union',
      url: 'https://www.canyonviewcu.com',
      logo: 'https://www.canyonviewcu.com/assets/img/logos/logo-cvcu.png',
    },
    {
      name: 'Gerhart Cole',
      url: 'https://gerhartcole.com',
      logo: 'https://gerhartcole.com/wp-content/uploads/2018/05/cropped-GC_logo_horizontal_HighRes-02.png',
    },
    {
      name: 'Gene Haas Foundation',
      url: 'https://ghaasfoundation.org',
      logo: 'https://images.squarespace-cdn.com/content/v1/672aad763d1b140e7bfe7b9a/5822f7d7-fc47-4a6c-a3c6-1b824d019fba/GENE+HAAS+VERTICAL+CLOSER+LINES.png?format=1500w',
    },
    {
      name: 'Fabworks',
      url: 'https://www.fabworks.com',
      logo: 'https://www.fabworks.com/fabworks.svg',
    },
  ];
  const pageStyles = {
    hero: {
      height: '75vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: '800',
      letterSpacing: '-0.03em',
      marginBottom: '10px',
      background: 'linear-gradient(180deg, #ffffff 0%, #86868b 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
      fontWeight: '300',
      color: themeColors.textMuted,
      letterSpacing: '6px',
      textTransform: 'uppercase',
      marginBottom: '40px',
    },
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.01)',
      border: '1px solid rgba(255, 255, 255, 0.03)',
      padding: '30px',
      borderRadius: '4px',
      transition: 'border-color 0.3s ease',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '500',
      marginBottom: '15px',
      color: '#7dd3fc',
    },
    cardText: {
      color: themeColors.textMuted,
      fontSize: '14px',
      lineHeight: '1.6',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '40px',
      margin: '40px 0',
    },
    statBox: { flex: '1 minWidth(200px)' },
    statNumber: {
      fontSize: '64px',
      fontWeight: '200',
      color: '#fff',
      fontFamily: 'monospace',
    },
    statLabel: {
      fontSize: '12px',
      color: themeColors.textMuted,
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    markerLabel: {
      position: 'absolute',
      bottom: 'anchor(top)',
      left: 'anchor(center)',
      translate: '-50% 0',
      marginBottom: '8px',
      padding: '0.25rem 0.5rem',
      background: '#1a1a1a',
      color: '#fff',
      fontSize: '0.75rem',
      borderRadius: '4px',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      transition: 'opacity 0.3s',
    },
    marqueeContainer: {
      overflow: 'hidden',
      userSelect: 'none',
      display: 'flex',
      gap: '40px',
      padding: '20px 0',
      position: 'relative',
      maskImage:
        'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
      WebkitMaskImage:
        'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
    },
    marqueeGroup: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: '40px',
      minWidth: '100%',
      animation: 'marqueeSpeed 25s linear infinite',
    },
    sponsorLogo: {
      height: '45px',
      width: 'auto',
      opacity: '0.4',
      filter: 'grayscale(100%) invert(100%)',
      transition: 'opacity 0.3s ease, filter 0.3s ease, transform 0.2s ease',
      cursor: 'pointer',
    },
  };

  const canvasRef = useRef(null);
  // Track pointer snapshot locations [x, y]
  const pointerInteractionRef = useRef(null);

  // Initialize react-spring physics for both x (r[0]) and y (r[1])
  const [{ r }, api] = useSpring(() => ({
    r: [0, 0],
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const containerRef = useRef(null);
  const [width, setWidth] = React.useState(0);
  const { ref: globeRef, inView } = useInView({ threshold: 0.0 });

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes marqueeSpeed {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
    .sponsor-link:hover img {
      opacity: 1 !important;
      filter: grayscale(0%) invert(0%) drop-shadow(0 0 12px rgba(255,255,255,0.5)) !important;
      transform: scale(1.05);
    }
  `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', updateWidth);
    updateWidth(); // Initial call

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !inView) return;

    let phi = 0;
    let animationFrameId;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: 1, // Changed to 1 if your theme is dark, change back to 0 if light
      diffuse: 1.2,
      mapSamples: 4000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.49, 0.827, 0.988],
      glowColor: [1, 1, 1],
      markers: markers.map((m) => ({
        location: m.location,
        size: 0.03,
        id: m.id,
      })),
      arcs: [{ from: [40.57, -111.89], to: [29.7604, -95.3698] }],
      arcColor: [0.49, 0.827, 0.988],
      arcWidth: 0.5,
      arcHeight: 0.15,
      markerElevation: 0.0,
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
    });

    function animate() {
      phi += 0.005;
      const [springPhi, springTheta] = r.get();
      globe.update({
        phi: phi + springPhi,
        theta: 0.2 + springTheta,
      });
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
    };
  }, [width, inView]);

  return (
    <div>
      <header style={pageStyles.hero}>
        <h1 style={pageStyles.heroTitle}>ALUMINUM FALCONS</h1>
        <p style={pageStyles.heroSubtitle}>FTC Robotics Team</p>
        <LightningButton
          //style={globalStyles.btn}
          onClick={() => navigate('join')}
          onMouseEnter={(e) => {
            e.target.style.background = '#000';
            e.target.style.color = '#fff';
            e.target.style.border = '1px solid #fff';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#fff';
            e.target.style.color = '#000';
            e.target.style.border = 'none';
          }}
        >
          Join Our Mission
        </LightningButton>
      </header>
      <section style={globalStyles.section}>
        <div style={globalStyles.sectionTitle}>Our Mission</div>
        <div
          style={{
            maxWidth: '800px',
            fontSize: '24px',
            fontWeight: '300',
            color: '#e5e5e7',
            marginBottom: '40px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div style={pageStyles.statsContainer}>
          <div style={pageStyles.statBox}>
            <ScrollStat style={pageStyles.statNumber} end={5} />
            <div style={pageStyles.statLabel}>STEM Nights</div>
          </div>
          <div style={pageStyles.statBox}>
            <ScrollStat style={pageStyles.statNumber} end={7} />
            <div style={pageStyles.statLabel}>New FLL Members</div>
          </div>
          <div style={pageStyles.statBox}>
            <ScrollStat style={pageStyles.statNumber} end={1127} />
            <div style={pageStyles.statLabel}>Hours of Work</div>
          </div>
        </div>
      </section>
      <section style={globalStyles.section}>
        <div style={globalStyles.sectionTitle}>Home Planet</div>
        <div
          ref={containerRef}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            class="left"
            style={{
              maxWidth: '40%', // Ensures it never exceeds half the parent container
            }}
          >
            <HoverCard
              cardTitle="Sandy, Utah"
              description="We hope to one day make it to the FTC World championships in
            Houston, Texas."
            />
          </div>
          <div
            class="right"
            style={{
              width: '100%',
              maxWidth: '60%', // Ensures it never exceeds half the parent container
              aspectRatio: '1/1',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
            ref={globeRef}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={(e) => {
                const currentSpring = r.get();
                pointerInteractionRef.current = [
                  e.clientX - currentSpring[0] * 200,
                  e.clientY - currentSpring[1] * 200,
                ];
                canvasRef.current.style.cursor = 'grabbing';
              }}
              onPointerMove={(e) => {
                if (pointerInteractionRef.current !== null) {
                  const deltaX = e.clientX - pointerInteractionRef.current[0];
                  const deltaY = e.clientY - pointerInteractionRef.current[1];
                  api.start({
                    r: [deltaX / 200, deltaY / 200],
                    immediate: false,
                  });
                }
              }}
              onPointerUp={() => {
                pointerInteractionRef.current = null;
                canvasRef.current.style.cursor = 'grab';
              }}
              onPointerLeave={() => {
                pointerInteractionRef.current = null;
                if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
              }}
              style={{
                width: '100%',
                height: '100%',
                cursor: 'grab',
                touchAction: 'none',
              }}
            />
            {markers.map((m) => (
              <div
                key={m.id}
                style={{
                  ...pageStyles.markerLabel,
                  positionAnchor: `--cobe-${m.id}`,
                  opacity: `var(--cobe-visible-${m.id}, 0)`,
                }}
              >
                {m.label}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={globalStyles.section}>
        <div style={globalStyles.sectionTitle}>Engineering Philosophy</div>
        <div style={pageStyles.grid3}>
          <HoverCard
            cardTitle="Gracious Professionalism"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <HoverCard
            cardTitle="Something else"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <HoverCard
            cardTitle="Iterative Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </section>
      <section style={{ ...globalStyles.section, paddingBottom: '100px' }}>
        <div style={globalStyles.sectionTitle}>Sponsors</div>
        <div
          style={pageStyles.marqueeContainer}
          onMouseEnter={(e) => {
            const groups = e.currentTarget.querySelectorAll('.marquee-group');
            groups.forEach((g) => (g.style.animationPlayState = 'paused'));
          }}
          onMouseLeave={(e) => {
            const groups = e.currentTarget.querySelectorAll('.marquee-group');
            groups.forEach((g) => (g.style.animationPlayState = 'running'));
          }}
        >
          {/* Double mapped to ensure an infinite seamless wrapping animation loop */}
          {[1, 2].map((loopIdx) => (
            <div
              key={loopIdx}
              className="marquee-group"
              style={pageStyles.marqueeGroup}
            >
              {sponsors.map((sponsor, idx) => (
                <a
                  key={`${loopIdx}-${idx}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-link"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    style={{
                      ...pageStyles.sponsorLogo,
                      maxHeight: '40px', // Standardizes layout boundaries across different aspect ratios
                      maxWidth: '160px',
                      objectFit: 'contain',
                    }}
                  />
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>{' '}
    </div>
  );
}
