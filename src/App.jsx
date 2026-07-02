// src/App.js
import React, { useState, useEffect, useMemo } from 'react';
import { globalStyles, themeColors } from './styles';
import './style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import Team from './pages/Team';
import Robots from './pages/Robots';
import History from './pages/History';
import FLL from './pages/FLL';
import Join from './pages/Join';
import Hyperspace from './components/Hyperspace';

export default function App() {
  const [hasJumped, setHasJumped] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [displayedPage, setDisplayedPage] = useState('home'); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateWithTransition = (nextPage) => {
    if (nextPage === currentPage) return;

    setIsTransitioning(true); 
    setCurrentPage(nextPage);

    setTimeout(() => {
      setDisplayedPage(nextPage);
      window.scrollTo(0, 0);
      setIsTransitioning(false); 
    }, 300);
  };

  const renderPage = () => {
    switch (displayedPage) {
      case 'home':
        return <Home navigate={navigateWithTransition} />;
      case 'team':
        return <Team />;
      case 'robots':
        return <Robots />;
      case 'history':
        return <History />;
      case 'fll':
        return <FLL navigate={navigateWithTransition} />;
      case 'join':
        return <Join />;
      default:
        return <Home navigate={navigateWithTransition} />;
    }
  };

  const randomStarfieldBackground = useMemo(() => {
    const starCount = 35; 
    const canvasSize = 600; 
    const colors = ['#fff', '#eee', '#7f8c8d', '#e0f7fa', '#ffe0b2']; 
    const gradients = [];

    for (let i = 0; i < starCount; i++) {
      const size = Math.random() > 0.85 ? '2px 2px' : '1px 1px'; 
      const x = Math.floor(Math.random() * canvasSize);
      const y = Math.floor(Math.random() * canvasSize);
      const color = colors[Math.floor(Math.random() * colors.length)];

      gradients.push(
        `radial-gradient(${size} at ${x}px ${y}px, ${color}, rgba(0,0,0,0))`
      );
    }

    return {
      backgroundImage: gradients.join(',\n'),
      backgroundSize: `${canvasSize}px ${canvasSize}px`,
    };
  }, []);

  const starFieldStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    ...randomStarfieldBackground, 
    opacity: 0.8,
    transform: `translateY(${scrollY * -0.15}px)`,
    zIndex: 0,
  };

  const pageTransitionStyle = {
    transition:
      'opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1), transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
    opacity: isTransitioning ? 0 : 1,
    transform: isTransitioning ? 'translateY(10px)' : 'translateY(0px)',
  };

  return (
    <div style={globalStyles.container}>
      {!hasJumped && <Hyperspace onComplete={() => setHasJumped(true)} />}
      <div style={globalStyles.glowEffect} />
      <div style={starFieldStyle} />

      <Navbar currentPage={currentPage} navigate={navigateWithTransition} />

      <main
        style={{
          opacity: hasJumped ? 1 : 0,
          transition: 'opacity 1.5s ease-in', // Content fades in as jump ends
          zIndex: 2,
        }}
      >
        <div style={pageTransitionStyle}>{renderPage()}</div>
      </main>

      <Footer />
    </div>
  );
}
