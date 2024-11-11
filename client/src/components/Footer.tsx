import React, { useState, useEffect } from 'react';

const footerStyles: React.CSSProperties = {
  backgroundColor: '#280004',
  textAlign: 'center',
  padding: '1rem',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: 1000,
  transition: 'transform 0.3s ease', // Transition for smooth sliding effect
};

const collapsedFooterStyles: React.CSSProperties = {
  ...footerStyles,
  transform: 'translateY(100%)', // Slide footer out of view when collapsed
};

const linkStyles: React.CSSProperties = {
  color: '#CCC9A1',
  margin: '0 0.5rem',
  textDecoration: 'none',
  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
};

const iconStyles: React.CSSProperties = {
  width: '24px',
  height: '24px',
  verticalAlign: 'middle',
  filter: 'invert(85%)',
};

const Footer: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is at the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer style={isAtBottom ? footerStyles : collapsedFooterStyles}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          style={iconStyles}
        />
      </a>
    </footer>
  );
};

export default Footer;