import React from 'react';

const footerStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  textAlign: 'center',
  padding: '1rem',
  width: '100%',
  position: 'relative',
};

const linkStyles = {
  color: '#FFF',
  margin: '0 0.5rem',
  textDecoration: 'none',
  fontSize: 'clamp(0.9rem, 2vw, 1rem)', // Adjusts font size for smaller screens
};

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <a href="https://github.com/J0263" target="_blank" rel="noopener noreferrer" style={linkStyles}>GitHub</a>
      <a href="https://linkedin.com/in/jxrge" target="_blank" rel="noopener noreferrer" style={linkStyles}>LinkedIn</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>Instagram</a>
    </footer>
  );
};

export default Footer;