// src/components/Footer.js
import React from 'react';
import { themeColors } from '../styles';

export default function Footer() {
  const footerStyle = {
    borderTop: `1px solid ${themeColors.border}`,
    padding: '40px',
    textAlign: 'center',
    fontSize: '11px',
    color: themeColors.textDark,
    letterSpacing: '1px',
    position: 'relative',
    zIndex: 2,
  };

  const linkColor = {
    color: '#7dd3fc',
  };
  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} ALUMINUM FALCONS. ALL SYSTEMS OPERATIONAL.
      CONTACT AT{' '}
      <a style={linkColor} href="mailto:aluminumfalcons17230@gmail.com">
        aluminumfalcons17230@gmail.com
      </a>
    </footer>
  );
}
