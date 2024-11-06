import React, { useState } from 'react';

const headerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  position: 'fixed',
  top: 0,
  width: '100vw',
  zIndex: 1000,
  boxSizing: 'border-box',
  transition: 'height 0.3s', // Smooth transition for expanding/collapsing
};

const logoContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '1rem 1.5rem',
  boxSizing: 'border-box',
};

const logoStyles = {
  fontSize: '1.8rem',
  color: '#FFF',
};

const navStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'center',
  marginTop: '1.5rem',
};

const linkStyles = {
  color: '#FFF',
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontWeight: 'normal',
  textAlign: 'center',
  transition: 'color 0.3s',
};

const toggleButtonStyles = {
  backgroundColor: 'transparent',
  color: '#FFF',
  fontSize: '1.5rem',
  border: 'none',
  cursor: 'pointer',
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header style={{ ...headerStyles, height: isOpen ? '100vh' : 'auto' }}>
      <div style={logoContainerStyles}>
        <h1 style={logoStyles}>Jorge Bush</h1>
        <button style={toggleButtonStyles} onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen && (
        <nav style={navStyles}>
          <a href="#about" style={linkStyles} onClick={toggleMenu}>About Me</a>
          <a href="#portfolio" style={linkStyles} onClick={toggleMenu}>Portfolio</a>
          <a href="#contact" style={linkStyles} onClick={toggleMenu}>Contact</a>
          <a href="#resume" style={linkStyles} onClick={toggleMenu}>Resume</a>
        </nav>
      )}
    </header>
  );
};

export default Header;