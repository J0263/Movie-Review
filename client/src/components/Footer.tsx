import React from 'react'; // import react library

// define type annotations for the style objects
const footerStyles: React.CSSProperties = {
  backgroundColor: '#280004', // main background color from header
  textAlign: 'center', // center text alignment
  padding: '1rem', // padding around the footer
  width: '100%', // full width of the page
  position: 'fixed', // fixed position at the bottom
  bottom: 0, // stick to the bottom
  left: 0, // align to left edge
  zIndex: 1000, // ensure it is above other elements
};

const linkStyles: React.CSSProperties = {
  color: '#CCC9A1', // text color for link
  margin: '0 0.5rem', // margin between links
  textDecoration: 'none', // no underline on links
  fontSize: 'clamp(0.9rem, 2vw, 1rem)', // adjusts font size for smaller screens
};

// image styling for Instagram icon
const iconStyles: React.CSSProperties = {
  width: '24px', // icon width
  height: '24px', // icon height
  verticalAlign: 'middle', // align icon in middle
  filter: 'invert(85%)', // adjusts color of icon to match text color (#CCC9A1)
};

// define the Footer component with React.FC type
const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}> {/* footer element with defined styles */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
          alt="Instagram" 
          style={iconStyles} // styling for the Instagram icon
        />
      </a>
    </footer>
  );
};

export default Footer; // export Footer component