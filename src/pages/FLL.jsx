// src/pages/FLL.js
import React, { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalStyles, themeColors } from '../styles';
import LightningButton from '../components/LightningButton';
import LightningText from '../components/LightningText';
import HoverCard from '../components/HoverCard';

export default function FLL({ navigate }) {
  const handleJoinClick = () => {
    // Navigate to Join page
    navigate('join');

    // Brief timeout to allow the page to load before scrolling
    setTimeout(() => {
      const fllSection = document.getElementById('fll-engagement-zone');
      if (fllSection) {
        fllSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  };

  const contentSplit = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'center',
  };

  return (
    <section style={globalStyles.section}>
      <div style={globalStyles.sectionTitle}>Junior Division: FLL</div>

      <div style={pageStyle}>
        <div style={contentSplit}>
          {/* Image Container */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img
              src="public/photos/teamPhotos/LegoLeagueTeam2026.JPG"
              alt="FLL Team 2026"
              style={{
                width: '100%',
                borderRadius: '20px',
                border: `1px solid ${themeColors.border}`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
              }}
            />
          </div>

          {/* Description Text */}
          <div style={{ flex: '1.2', minWidth: '300px' }}>
            {/* <h2
              style={{
                color: '#fff',
                fontSize: '32px',
                marginBottom: '20px',
                fontWeight: '300',
              }}
            >
              The LEGO Vaders
            </h2> */}
            <LightningText>LEGO Vaders</LightningText>
            <p
              style={{
                color: themeColors.textMuted,
                fontSize: '18px',
                lineHeight: '1.7',
              }}
            >
              Our lego league team, the LEGO Vaders, introduces younger students
              to real-world engineering challenges through LEGO Spike Prime and
              EV3 technology. Our program focuses not just on building robots,
              but on developing the{' '}
              <strong>
                Core Values of teamwork, discovery, and inclusion.
              </strong>
            </p>

            <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
              <HoverCard
                cardTitle="01"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                color="#FF0000"
              />
              <HoverCard
                cardTitle="02"
                description="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                color="#FF0000"
              />
            </div>

            <div style={{ marginTop: '40px' }}>
              <LightningButton onClick={handleJoinClick} color="#FF0000">
                Join FLL
              </LightningButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const infoBlock = {
  flex: 1,
  padding: '20px',
  background: 'rgba(255,255,255,0.02)',
  borderRadius: '12px',
  border: `1px solid rgba(255,255,255,0.05)`,
};

const accentText = {
  color: themeColors.accentActive,
  fontSize: '24px',
  fontWeight: 'bold',
  display: 'block',
  marginBottom: '10px',
};

const smallDesc = {
  color: themeColors.textMuted,
  fontSize: '14px',
  margin: 0,
};
