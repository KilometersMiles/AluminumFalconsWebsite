// src/pages/Team.js
import React, { useState } from 'react';
import { globalStyles, themeColors } from '../styles';
import HoverCard from '../components/HoverCard.jsx';

export default function Team() {
  const [selectedYear, setSelectedYear] = useState('DECODE');

  // Coaches data (stays persistent across seasons)
  const coachesData = [
    {
      name: 'Aaron Lockhart',
      role: 'Head Coach',
      image: 'public/photos/teamPhotos/Aaron.jpg',
    },
    {
      name: 'Chris Higginson',
      role: 'Coach & Technical Advisor',
      image: 'public/photos/teamPhotos/Chris.jpg',
    },
  ];

  // Added 'image' property to each member object
  const rosterData = {
    DECODE: [
      {
        name: 'Miles Higginson',
        role: 'Lead Software',
        image: 'public/photos/teamPhotos/Miles.jpg',
      },
      {
        name: 'Ryan Davis',
        role: 'Lead Mechanical',
        image: 'public/photos/teamPhotos/Ryan.jpg',
      },
      {
        name: 'Ethan Lockhart',
        role: 'CAD & Outreach',
        image: 'public/photos/teamPhotos/Ethan.jpg',
      },
      {
        name: 'Lewis Higginson',
        role: 'Build Team & Portfolio',
        image: 'public/photos/teamPhotos/Lewis.jpg',
      },
      {
        name: 'Anna Auman',
        role: 'Outreach & Pit',
        image: 'public/photos/teamPhotos/Anna.jpg',
      },
      {
        name: 'Sam Haney',
        role: 'Build Team',
        image: 'public/photos/teamPhotos/Sam.jpg',
      },
      {
        name: 'Flash Auman',
        role: 'Build Team',
        image: 'public/photos/teamPhotos/Flash.jpg',
      },
    ],
    INDEEP: [
      {
        name: 'Miles Higginson',
        role: 'Lead Software',
        image: 'public/photos/teamPhotos/Miles.jpg',
      },
      {
        name: 'Ryan Davis',
        role: 'Lead Mechanical',
        image: 'public/photos/teamPhotos/Ryan.jpg',
      },
      {
        name: 'Ethan Lockhart',
        role: 'CAD & Outreach',
        image: 'public/photos/teamPhotos/Ethan.jpg',
      },
      {
        name: 'Lewis Higginson',
        role: 'Build Team',
        image: 'public/photos/teamPhotos/Lewis.jpg',
      },
      {
        name: 'Flash Auman',
        role: 'Build Team',
        image: 'public/photos/teamPhotos/Flash.jpg',
      },
    ],
    STAGE: [
      {
        name: 'Miles Higginson',
        role: 'Lead Software',
        image: 'public/photos/teamPhotos/Miles.jpg',
      },
      {
        name: 'Ryan Davis',
        role: 'Lead Mechanical',
        image: 'public/photos/teamPhotos/Ryan.jpg',
      },
      {
        name: 'Ethan Lockhart',
        role: 'CAD & Outreach',
        image: 'public/photos/teamPhotos/Ethan.jpg',
      },
      {
        name: 'Flash Auman',
        role: 'Build Team',
        image: 'public/photos/teamPhotos/Flash.jpg',
      },
      {
        name: 'Lewis Higginson',
        role: 'Build Team',
        image: 'public/photos/teamPhotos/Lewis.jpg',
      },
    ],
    POWERPLAY: [],
    FRENZY: [],
    SKYSTONE: [],
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '25px',
  };

  return (
    <section style={globalStyles.section}>
      {/* Student Roster Section */}
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

      <div style={gridStyle}>
        {rosterData[selectedYear] && rosterData[selectedYear].map((member, index) => (
          <HoverCard
            key={index}
            cardTitle={member.name}
            description={member.role}
            image={member.image}
          />
        ))}
      </div>

      {/* Coaches & Mentors Section */}
      <div style={{ ...globalStyles.sectionTitle, marginTop: '50px' }}>
        Coaches & Mentors
      </div>
      
      <div style={gridStyle}>
        {coachesData.map((coach, index) => (
          <HoverCard
            key={index}
            cardTitle={coach.name}
            description={coach.role}
            image={coach.image}
          />
        ))}
      </div>
    </section>
  );
}