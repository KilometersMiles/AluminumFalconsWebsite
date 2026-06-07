// src/pages/Join.js
import React, { useState } from 'react';
import { globalStyles, themeColors } from '../styles';
import LightningButton from '../components/LightningButton';

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sector: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '500px',
    marginTop: '30px',
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.02)',
    border: `1px solid ${themeColors.border}`,
    padding: '14px',
    color: '#fff',
    borderRadius: '4px',
    fontSize: '14px',
    outline: 'none',
  };

  return (
    <section style={globalStyles.section}>
      <div style={globalStyles.sectionTitle}>Join Team</div>
      <script
        src="https://s.pageclip.co/v1/pageclip.js"
        charset="utf-8"
      ></script>
      <div style={{ maxWidth: '600px' }}>
        <p
          style={{
            fontSize: '18px',
            fontWeight: '300',
            color: themeColors.textMuted,
          }}
        >
          Looking for dedicated developers, CAD modelers, mechanical builders,
          and strategic thinkers. Initialize your application below.
        </p>
        <form
          action="https://send.pageclip.co/uYd97f2cgVUNsWJO2b7J0uTwPcjEvP4a/application_form"
          class="pageclip-form"
          method="post"
          style={formStyle}
        >
          <input type="hidden" name="Team" value="FTC" />
          <input
            name="name"
            type="text"
            placeholder="APPLICANT FULL NAME"
            style={inputStyle}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="COMMUNICATION CHANNELS (EMAIL)"
            style={inputStyle}
            required
          />
          <select name="sector" style={inputStyle} required defaultValue="">
            <option value="" disabled>
              SELECT PREFERRED SECTOR
            </option>
            <option value="software">Software Division</option>
            <option value="mechanical">Mechanical Design</option>
            <option value="business">Operations & Strategy</option>
            <option value="fll-mentor">FLL Mentorship</option>
          </select>
          <textarea
            name="message"
            placeholder="STATEMENT OF ROBOTICS INTEREST"
            style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
            required
          ></textarea>

          <LightningButton type="submit">Submit Application</LightningButton>
        </form>

        <hr
          style={{
            margin: '60px 0',
            border: 'none',
            borderTop: `1px solid ${themeColors.border}`,
          }}
        />

        <div id="fll-engagement-zone" style={{ marginBottom: '40px' }}>
          <div style={globalStyles.sectionTitle}>FLL Team</div>
          <p
            style={{
              color: themeColors.textMuted,
              lineHeight: '1.6',
              marginTop: '10px',
            }}
          >
            We actively have a <strong>FIRST Lego League</strong> team called
            The LEGO Vaders. Whether you are a younger student looking to join
            an FLL team or an FTC student looking to mentor, we would love to
            connect with you and build your STEM experience.
          </p>
          <div
            style={{
              marginTop: '20px',
              padding: '20px',
              background: 'rgba(125, 211, 252, 0.05)',
              borderRadius: '8px',
              borderLeft: `4px solid ${themeColors.accentActive}`,
            }}
          >
            <span
              style={{
                color: '#fff',
                fontSize: '14px',
                display: 'block',
                marginBottom: '5px',
              }}
            >
              Current Program:
            </span>
            <ul
              style={{
                color: themeColors.textMuted,
                fontSize: '14px',
                margin: 0,
                paddingLeft: '20px',
              }}
            >
              <li>Weekly FLL Mentorship Sessions</li>
              <li>Spike Prime robot building and training</li>
              <li>Innovation Project & Teamwork</li>
              <li>All kids 5th-8th grade eligible</li>
            </ul>
          </div>
          <form
            action="https://send.pageclip.co/uYd97f2cgVUNsWJO2b7J0uTwPcjEvP4a/application_form"
            class="pageclip-form"
            method="post"
            style={formStyle}
          >
            <input type="hidden" name="Team" value="FLL" />

            <input
              name="name"
              type="text"
              placeholder="APPLICANT FULL NAME"
              style={inputStyle}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="COMMUNICATION CHANNELS (EMAIL)"
              style={inputStyle}
              required
            />
            <textarea
              name="message"
              placeholder="INTEREST"
              style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
              required
            ></textarea>

            <LightningButton type="submit" color="#FF0000">
              Submit Application
            </LightningButton>
          </form>
        </div>
      </div>
    </section>
  );
}
