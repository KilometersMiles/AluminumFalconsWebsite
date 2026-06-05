// src/pages/History.js
import React from 'react';
import { globalStyles, themeColors } from '../styles';

export default function History() {
  const logs = [
    {
      event: 'DECODE',
    },
    {
      event: 'Utah Championship',
      record: 'Inspire Award 3rd Place',
      date: 'MAR 2026',
    },
    {
      event: 'Freedom Preparatory Academy Qualifier',
      record: 'Think Award',
      date: 'JAN 2026',
    },
    {
      event: 'Beehive Academy Qualifier',
      record: 'Inspire Award',
      date: 'DEC 2025',
    },
    {
      event: 'Beehive Academy Qualifier',
      record: 'Finalist Alliance - 1st Team Selected',
      date: 'DEC 2025',
    },
    {
      event: 'INTO THE DEEP',
    },
    {
      event: 'Utah Championship',
      record: 'Control Award',
      date: 'MAR 2025',
    },
    {
      event: 'Park City Qualifier',
      record: 'Innovate Award',
      date: 'FEB 2025',
    },
    {
      event: 'Park City Qualifier',
      record: 'Inspire Award 3rd Place',
      date: 'FEB 2025',
    },
    {
      event: 'Freedom Prep Qualifier',
      record: 'Control Award',
      date: 'JAN 2025',
    },
    {
      event: 'CENTERSTAGE',
    },
    {
      event: 'Utah Championship',
      record: 'Innovate Award 2nd Place',
      date: 'MAR 2024',
    },
    {
      event: 'POWER PLAY',
    },
    {
      event: 'Park City High School Qualifier',
      record: 'Design Award 3rd Place',
      date: 'MAR 2023',
    },
    {
      event: 'Freedom Prep Academy Qualifier',
      record: 'Innovate Award',
      date: 'DEC 2022',
    },
    {
      event: 'Freedom Prep Academy Qualifier',
      record: 'Winning Alliance - 2nd Team Selected',
      date: 'DEC 2022',
    },
    {
      event: 'FREIGHT FRENZY',
    },
    {
      event: 'Utah Championship',
      record: 'Innovate Award 2nd Place',
      date: 'JAN 2022',
    },
    {
      event: 'Park City Qualifier',
      record: 'Winning Alliance - 2nd Team Selected',
      date: 'JAN 2022',
    },
    {
      event: 'SKYSTONE',
    },
    {
      event: 'Utah Championship',
      record: "Judges' Award",
      date: 'FEB 2020',
    },
  ];

  return (
    <section style={globalStyles.section}>
      <div style={globalStyles.sectionTitle}>Achivements / Awards</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {logs.map((log, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderLeft: '2px solid rgba(255,255,255,0.1)',
              paddingLeft: '20px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: log.date != null ? '#fff' : '#7dd3fc',
                  margin: 0,
                }}
              >
                {log.event}
              </h3>
              <p
                style={{
                  color: themeColors.textMuted,
                  fontSize: '14px',
                  margin: '5px 0 0 0',
                }}
              >
                {log.record}
              </p>
            </div>
            <div
              style={{
                fontFamily: 'monospace',
                color: themeColors.textDark,
                fontSize: '14px',
              }}
            >
              {log.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
