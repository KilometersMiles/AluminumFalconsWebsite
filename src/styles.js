// src/styles.js
export const themeColors = {
  bg: '#08080c',
  textMain: '#f5f5f7',
  textMuted: '#a1a1aa',
  textDark: '#71717a',
  accentGlow:
    'radial-gradient(ellipse 60% 80% at top center, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 45%, rgba(0, 0, 0, 0) 70%)',
  accentActive: '#7dd3fc', // Cyber Sky Blue
  border: 'rgba(255, 255, 255, 0.06)',
};

export const globalStyles = {
  container: {
    backgroundColor: themeColors.bg,
    color: themeColors.textMain,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
    minHeight: '100vh',
    overflowX: 'hidden',
    lineHeight: '1.6',
    position: 'relative',
    paddingTop: '90px',
  },
  glowEffect: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100vw',
    height: '100vh',
    background: themeColors.accentGlow,
    pointerEvents: 'none',
    zIndex: 1,
  },
  section: {
    padding: '80px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  sectionTitle: {
    fontSize: '13px',
    letterSpacing: '1px',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: themeColors.textMuted,
    marginBottom: '40px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: `1px solid ${themeColors.border}`,
    padding: '8px 16px',
    borderRadius: '100px', // Perfect capsule badge
    width: 'fit-content',
    backdropFilter: 'blur(4px)',
  },
  // Soft pill button with continuous scaling animation on hover
  btn: {
    background: '#fff',
    color: '#000',
    border: 'none',
    padding: '14px 36px',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '-0.01em',
    borderRadius: '100px', // Completely pill-shaped
    cursor: 'pointer',
    transition:
      'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, background-color 0.2s ease',
    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.05)',
  },
  // Pill dropdowns
  dropdown: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: `1px solid ${themeColors.border}`,
    color: '#fff',
    padding: '12px 24px',
    fontSize: '14px',
    borderRadius: '100px', // Pill select menu
    cursor: 'pointer',
    marginBottom: '30px',
    outline: 'none',
    backdropFilter: 'blur(8px)',
  },
};
