import React, { useState } from 'react';
import { globalStyles, themeColors } from '../styles';

export default function HoverCard({ cardTitle, description, image, color }) {
  const [hovered, setHovered] = useState(false);

  const electricBlue = color != null ? color : '#7dd3fc';

  const cardStyles = {
    card: {
      background: 'rgba(255, 255, 255, 0.01)',
      padding: '30px',
      borderRadius: '16px',
      border: `1px solid ${hovered ? electricBlue : themeColors.border}`,
      backdropFilter: 'blur(10px)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      transform: hovered
        ? 'translateY(-5px) scale(1.02)'
        : 'translateY(0) scale(1)',
      boxShadow: hovered ? `0 10px 30px -10px ${electricBlue}44` : 'none',
      display: 'flex',
      flexDirection: 'column',
    },
    // New styles for the optional image
    imageContainer: {
      width: '100%',
      height: '200px', // Adjust height as needed
      borderRadius: '12px',
      marginBottom: '20px',
      overflow: 'hidden',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease',
      transform: hovered ? 'scale(1.05)' : 'scale(1)',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '500',
      marginBottom: '10px',
      color: hovered ? electricBlue : '#fff',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    cardText: {
      color: themeColors.textMuted,
      fontSize: '14px',
      lineHeight: '1.6',
    },
  };

  return (
    <div
      style={cardStyles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Conditionally render the image container if image prop exists */}
      {image && (
        <div style={cardStyles.imageContainer}>
          <img src={image} alt={cardTitle} style={cardStyles.image} />
        </div>
      )}

      <div style={cardStyles.cardTitle}>{cardTitle}</div>
      <div style={cardStyles.cardText}>{description}</div>
    </div>
  );
}
