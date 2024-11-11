import React from 'react'; // import react library

// define type annotations for the style objects
const footerStyles: React.CSSProperties = {
  backgroundColor: '#280004',
  textAlign: 'center',
  padding: '1rem', 
  width: '100%', 
  position: 'fixed', 
  bottom: 0, 
  left: 0, 
  zIndex: 1000, 
};

const linkStyles: React.CSSProperties = {
  color: '#CCC9A1', 
  margin: '0 0.5rem', 
  textDecoration: 'none', 
  fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
};

// image styling for Instagram icon
const iconStyles: React.CSSProperties = {
  width: '24px', 
  height: '24px', 
  verticalAlign: 'middle', 
  filter: 'invert(85%)', 
};

// define the Footer component with React.FC type
const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}> 
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