import React, { useState } from 'react';
import { themeColors } from '../styles';

export default function LightningText({ children, onClick, style }) {
  const [isHovered, setIsHovered] = useState(false);

  // Unique ID for the filter so multiple buttons on the same page don't clash
  const filterId = 'plasma-glow-' + Math.random().toString(36).substr(2, 9);
  const electricRed = '#FF0000';

  const baseTextStyle = {
    position: 'relative',
    // background: isHovered
    //   ? 'rgba(125, 211, 252, 0.05)'
    //   : 'rgba(255, 255, 255, 0.01)',
    // border: `1px solid ${
    //   isHovered ? 'transparent' : 'rgba(255, 255, 255, 0.15)'
    // }`,
    backdropFilter: 'blur(8px)',
    padding: '12px 32px',
    // borderRadius: '100px', // Keeps your sharp, clean-cut geometry aesthetic
    color: '#00000000',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    outline: 'none',
    overflow: 'visible', // Essential so the plasma arcs can break outside the bounding box
    transition: 'all 0.3s ease',
    zIndex: 2,
    ...style, // Allows overriding structural styles if needed
  };

  const lightningLayerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    inset: '-1px',
    padding: '12px 32px',
    //borderRadius: '100px',
    //border: `2px solid ${electricBlue}`,
    pointerEvents: 'none',
    //opacity: isHovered ? 1 : 0,
    //textShadow: `0px 0px 12px ${electricRed}`,
    filter: `drop-shadow(4px 4px 12px ${electricRed}) url(#${filterId})`,
    transition: 'opacity 0.2s ease',
    zIndex: 1,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    textTransform: 'inherit',
    whiteSpace: 'nowrap',
    marginBottom: '10px',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    WebkitTextStroke: '2px red',
  };

  return (
    <>
      {/* Dynamic SVG Distortion Filter */}
      <svg
        style={{
          position: 'absolute',
          width: 0,
          height: 0,
          pointerEvents: 'none',
        }}
      >
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="5"
            seed="1"
          >
            <animate
              attributeName="seed"
              from="1"
              to="100"
              dur="3s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="7" />
        </filter>
      </svg>

      <div style={baseTextStyle}>
        {children}
        <span style={lightningLayerStyle}>{children}</span>
      </div>
    </>
  );
}
