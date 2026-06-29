import React from 'react';

interface NewBadgeProps {
  style?: React.CSSProperties;
}

export const NewBadge: React.FC<NewBadgeProps> = ({ style }) => {
  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc2626', // Deep crimson red
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '2px 6px',
    borderRadius: '4px',
    lineHeight: 1,
    userSelect: 'none',
    ...style,
  };

  return <span style={badgeStyle}>New</span>;
};
