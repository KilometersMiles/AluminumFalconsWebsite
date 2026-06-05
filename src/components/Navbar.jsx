// src/components/Navbar.js
import React, { useState, useEffect } from 'react'; 
import { themeColors } from '../styles.js';
import LightningButton from './LightningButton.jsx';

export default function Navbar({ currentPage, navigate }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Monitor window width to handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);
      // Close the menu automatically if switching back to desktop
      if (!mobileView) setIsOpen(false);
    };

    // Run on mount to set initial state correctly
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '15px 20px' : '20px 40px',
      boxSizing: 'border-box',
      borderBottom: `1px solid ${themeColors.border}`,
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      backgroundColor: 'rgba(5, 5, 6, 0.7)',
      zIndex: 10,
      alignItems: isMobile && isOpen ? 'flex-start' : 'center',
      padding: isMobile ? '15px 20px' : '20px 40px',

      // Dynamically grow the navbar container to encapsulate the dropdown height
      height: isMobile && isOpen ? '100vh' : 'auto',
      transition: 'height 0.3s ease', // Smooths out the opening/closing transition
    },
    logo: {
      fontSize: '14px',
      fontWeight: '700',
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: '#fff',
      cursor: 'pointer',
    },
    // Changes layout from horizontal row to an overlay vertical stack on mobile
    navLinks: {
      display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      position: isMobile ? 'absolute' : 'static',
      top: isMobile ? '60px' : 'auto',
      left: 0,
      width: isMobile ? '100%' : 'auto',
      boxSizing: 'border-box',
      gap: isMobile ? '20px' : '30px',
      padding: isMobile ? '20px' : '0',
      alignItems: isMobile ? 'center' : 'baseline',
      borderBottom: isMobile ? `1px solid ${themeColors.border}` : 'none',
      zIndex: 11,
    },
    navLink: (isActive) => ({
      color: isActive ? '#fff' : themeColors.textMuted,
      textDecoration: 'none',
      fontSize: '12px',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      borderBottom: isActive ? '1px solid #fff' : '1px solid transparent',
      paddingBottom: '4px',
      width: isMobile ? '100%' : 'auto', // full width clickable area on mobile
      textAlign: isMobile ? 'center' : 'left',
      zIndex: 11,
    }),
    hamburger: {
      display: isMobile ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '22px',
      height: '18px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      zIndex: 11,
    },
    burgerLine: {
      width: '100%',
      height: '2px',
      backgroundColor: '#fff',
      transition: 'all 0.3s ease',
    },
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'team', label: 'Team' },
    { id: 'robots', label: 'Robots' },
    { id: 'history', label: 'History' },
    { id: 'fll', label: 'FLL' },
    { id: 'join', label: 'Join' },
  ];

  const handleNavigation = (id) => {
    navigate(id);
    setIsOpen(false); // Auto-close menu when a link is clicked
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo} onClick={() => handleNavigation('home')}>
        Aluminum Falcons
      </div>

      {/* Hamburger Icon for Mobile Mobile */}
      <button
        style={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <div
          style={{
            ...styles.burgerLine,
            transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}
        />
        <div
          style={{
            ...styles.burgerLine,
            opacity: isOpen ? 0 : 1,
            backdropFilter: 'blur(14px)',
          }}
        />
        <div
          style={{
            ...styles.burgerLine,
            transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
          }}
        />
      </button>

      <div style={styles.navLinks}>
        {menuItems.map((item) => (
          <span
            key={item.id}
            style={styles.navLink(currentPage === item.id)}
            onClick={() => handleNavigation(item.id)}
            onMouseEnter={(e) => {
              if (currentPage !== item.id) e.target.style.color = '#7dd3fc';
            }}
            onMouseLeave={(e) => {
              if (currentPage !== item.id)
                e.target.style.color = themeColors.textMuted;
            }}
          >
            {item.label}
          </span>
        ))}
        {/* Included if LightningButton needs to sit inside or alongside the navigation items */}
        {/* <LightningButton /> */}
      </div>
    </nav>
  );
}
