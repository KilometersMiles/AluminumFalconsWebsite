// src/pages/Team.js
import React, { useState } from 'react';
import { globalStyles, themeColors } from '../styles';
import HoverCard from '../components/HoverCard.jsx';

export default function Team() {
  const [selectedYear, setSelectedYear] = useState('DECODE');

  // Added 'image' property to each member object
  const rosterData = {
    DECODE: [
      {
        name: 'Miles Higginson',
        role: 'Lead Software',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carl_von_Linn%C3%A9.png/1920px-Carl_von_Linn%C3%A9.png',
      },
      {
        name: 'Ryan Davis',
        role: 'Lead Mechanical',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carl_von_Linn%C3%A9.png/1920px-Carl_von_Linn%C3%A9.png',
      },
      {
        name: 'Ethan Lockhart',
        role: 'CAD & Outreach',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carl_von_Linn%C3%A9.png/1920px-Carl_von_Linn%C3%A9.png',
      },
      {
        name: 'Lewis Higginson',
        role: 'Build Team & Portfolio',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carl_von_Linn%C3%A9.png/1920px-Carl_von_Linn%C3%A9.png',
      },
      {
        name: 'Anna Auman',
        role: 'Outreach & Pit',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carl_von_Linn%C3%A9.png/1920px-Carl_von_Linn%C3%A9.png',
      },
      {
        name: 'Sam Haney',
        role: 'Build Team',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carl_von_Linn%C3%A9.png/1920px-Carl_von_Linn%C3%A9.png',
      },
      {
        name: 'Flash Auman',
        role: 'Build Team',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carl_von_Linn%C3%A9.png/1920px-Carl_von_Linn%C3%A9.png',
      },
    ],
    INDEEP: [
      {
        name: 'Miles Higginson',
        role: 'Lead Software',
        image: 'https://via.placeholder.com/300x400',
      },
      {
        name: 'Ryan Davis',
        role: 'Lead Mechanical',
        image: 'https://via.placeholder.com/300x400',
      },
      {
        name: 'Ethan Lockhart',
        role: 'CAD & Outreach',
        image: 'https://via.placeholder.com/300x400',
      },
      {
        name: 'Lewis Higginson',
        role: 'Build Team',
        image: 'https://via.placeholder.com/300x400',
      },
      {
        name: 'Flash Auman',
        role: 'Build Team',
        image: 'https://via.placeholder.com/300x400',
      },
    ],
    STAGE: [
      {
        name: 'Miles Higginson',
        role: 'Lead Software',
        image: 'https://via.placeholder.com/300x400',
      },
      {
        name: 'Ryan Davis',
        role: 'Lead Mechanical',
        image: 'https://via.placeholder.com/300x400',
      },
      {
        name: 'Ethan Lockhart',
        role: 'CAD & Outreach',
        image: 'https://via.placeholder.com/300x400',
      },
      {
        name: 'Flash Auman',
        role: 'Build Team',
        image: 'https://via.placeholder.com/300x400',
      },
      {
        name: 'Lewis Higginson',
        role: 'Build Team',
        image: 'https://via.placeholder.com/300x400',
      },
    ],
    POWERPLAY: [],
    FRENZY: [],
    SKYSTONE: [],
  };

  return (
    <section style={globalStyles.section}>
      <div style={globalStyles.sectionTitle}>Crew Roster</div>

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        style={globalStyles.dropdown}
      >
        <option value="DECODE">DECODE</option>
        <option value="INDEEP">INTO THE DEEP</option>
        <option value="STAGE">CENTERSTAGE</option>
      </select>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '25px',
        }}
      >
        {rosterData[selectedYear].map((member, index) => (
          <HoverCard
            key={index}
            cardTitle={member.name}
            description={member.role}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
}
