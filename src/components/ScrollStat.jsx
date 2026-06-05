import React from 'react';
import CountUp from 'react-countup';
import { globalStyles, themeColors } from '../styles';

const statStyle = {
  statLabel: {
    fontSize: '12px',
    color: themeColors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  statNumber: {
    fontSize: '64px',
    fontWeight: '200',
    color: '#fff',
    fontFamily: 'monospace',
  },
};
const ScrollStat = ({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  separator = ',',
}) => {
  return (
    <CountUp
      end={end}
      prefix={prefix}
      suffix={suffix}
      decimals={decimals}
      duration={duration}
      separator={separator}
      enableScrollSpy={true} // Triggers animation on scroll
      scrollSpyOnce={true} // True = runs once, False = re-runs every time it scrolls into view
    >
      {({ countUpRef }) => (
        <span ref={countUpRef} style={statStyle.statNumber} />
      )}
    </CountUp>
  );
};

export default ScrollStat;
