import React from 'react';

// styles for the header container
const headerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end', // Align items to the right
  backgroundColor: '#280004', // main background color
  position: 'fixed',
  top: 0,
  width: '100%', // Use 100% instead of 100vw to avoid horizontal scrolling
  zIndex: 1000,
  boxSizing: 'border-box',
  padding: '1rem 1.5rem',
  overflow: 'hidden', // Prevent overflow
};

// styles for the logo and menu container
const logoContainerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
};

// styles for the logo text
const logoStyles: React.CSSProperties = {
  fontSize: '2rem',
  color: '#F0FFCE', // title color
};

// styles for the navigation menu
const navStyles: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap', // Allow items to wrap to the next line
  gap: '1.5rem',
  alignItems: 'flex-start', // Align items to the top
  justifyContent: 'flex-end', // Align items to the right
  width: '100%', // Ensure the nav takes the full width
};

// styles for each link in the navigation menu
const linkStyles: React.CSSProperties = {
  color: '#CCC9A1', // default link color
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'normal',
  transition: 'color 0.3s',
};

// additional styles for link hover and active states
const linkHoverStyles: React.CSSProperties = {
  color: '#A53F2B', // link hover color
};

const activeLinkStyles: React.CSSProperties = {
  backgroundColor: '#4C230A', // active link background color
  padding: '0.5rem 1rem',
  borderRadius: '4px',
};

// define the Header component as a functional component with React.FC type
const Header: React.FC = () => {
  return (
    <header style={headerStyles}>
      <div style={logoContainerStyles}>
        <h1 style={logoStyles}>Reel Reviews</h1>
        <nav style={navStyles}>
          <a href="#search" style={{ ...linkStyles, ...activeLinkStyles }}>Search</a>
          <a href="#your-watched" style={linkStyles}>Your Watched</a>
          <a href="#write-review" style={linkStyles}>Write a Review</a>
          <a href="#login" style={linkStyles}>Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;