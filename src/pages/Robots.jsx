// src/pages/Robots.js
import React, { useState } from 'react';
import { globalStyles, themeColors } from '../styles';

export default function Robots() {
  const [selectedYear, setSelectedYear] = useState('DECODE');

  const robotSpecs = {
    DECODE: {
      name: 'KEVIN SENIOR',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/FANUC_6-axis_welding_robots.jpg/500px-FANUC_6-axis_welding_robots.jpg', // Placeholder for Robot photo
      drive: '4x Gobilda 435 RPM / 3D Printed',
      weight: '14.2 lbs',
      features:
        'Modular & Fully 3D printed. Turret Tracking. Limelight & Pinpoint localization. High speed spindexer',
    },
    INDEEP: {
      name: 'KEVIN',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/500px-HONDA_ASIMO.jpg', // Placeholder for Robot photo
      drive: '4x Gobilda Yellow Jacket 435 RPM / GoBilda U-Channel',
      weight: '7093 lbs',
      features: 'Dual Viper Slides. Grate Transfer. Rubber Band Claw.',
    },
  };

  const currentRobot = robotSpecs[selectedYear];

  return (
    <section style={globalStyles.section}>
      <div style={globalStyles.sectionTitle}>Our Robots</div>

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        style={globalStyles.dropdown}
      >
        <option value="DECODE">DECODE</option>
        <option value="INDEEP">INTO THE DEEP</option>
      </select>

      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'row',
          gap: '50px',
          flexWrap: 'wrap', // Better for mobile responsiveness
          alignItems: 'flex-start',
        }}
      >
        {/* Robot Image Section */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img
            src={currentRobot.image}
            alt={currentRobot.name}
            style={{
              width: '100%',
              borderRadius: '12px',
              border: `1px solid ${themeColors.border}`,
              boxShadow: `0 10px 30px rgba(0,0,0,0.5)`,
            }}
          />
        </div>

        {/* Specs Section */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2
            style={{
              fontSize: '42px',
              fontWeight: '200',
              letterSpacing: '2px',
              color: '#fff',
              marginBottom: '25px',
              marginTop: '0',
            }}
          >
            {currentRobot.name}
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
            }}
          >
            <div>
              <div style={specLabelStyle}>Drivetrain</div>
              <div style={specValueStyle}>{currentRobot.drive}</div>
            </div>

            <div>
              <div style={specLabelStyle}>Net Mass</div>
              <div style={specValueStyle}>{currentRobot.weight}</div>
            </div>

            <div>
              <div style={specLabelStyle}>Features</div>
              <div
                style={{
                  color: themeColors.textMuted,
                  fontSize: '15px',
                  lineHeight: '1.6',
                }}
              >
                {currentRobot.features}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const specLabelStyle = {
  fontSize: '11px',
  textTransform: 'uppercase',
  color: themeColors.textMuted,
  letterSpacing: '1px',
  marginBottom: '4px',
};

const specValueStyle = {
  color: '#fff',
  fontSize: '16px',
  fontFamily: 'monospace',
};
