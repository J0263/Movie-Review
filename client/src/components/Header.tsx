import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

// styles for the header container
const headerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#280004',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: '60px',
  padding: '0 1.5rem',
  zIndex: 1000,
};

// styles for the logo text
const logoStyles: React.CSSProperties = {
  fontSize: '2rem',
  color: '#F0FFCE',
};

// styles for the navigation menu
const navStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
};

// styles for each link in the navigation menu
const linkStyles: React.CSSProperties = {
  color: '#CCC9A1',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'normal',
  transition: 'color 0.3s',
};

// styles for the search input and button
const inputStyles: React.CSSProperties = {
  padding: '0.5rem',
  border: 'none',
  borderRadius: '4px',
  marginRight: '0.5rem',
};

// styles for the search button
const buttonStyles: React.CSSProperties = {
  backgroundColor: '#A53F2B',
  color: '#FFF',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

// styles for the collapsible menu
const menuStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  backgroundColor: '#280004',
  top: '60px', // Adjust based on header height
  left: 0,
  right: 0,
  zIndex: 1000,
  alignItems: 'center', // Center items horizontally
};

// styles for the menu button
const menuButtonStyles: React.CSSProperties = {
  display: 'none', // Initially hide the button
  cursor: 'pointer',
  color: '#CCC9A1',
};

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm) {
      try {
        const apiKey = import.meta.env.VITE_REACT_APP_OMDB_API_KEY;
        const response = await axios.get(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&type=movie&apikey=${apiKey}`);
        
        if (response.data.Response === "True") {
          navigate('/search', { state: { results: response.data } });
        } else {
          alert('Movie not found!');
        }
      } catch (error) {
        console.error('Error fetching data from the API', error);
      }
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={headerStyles}>
      <Link to="/" style={logoStyles}>Reel Reviews</Link>
      <div onClick={toggleMenu} style={{ ...menuButtonStyles, display: window.innerWidth < 768 ? 'block' : 'none' }}>
        ☰ {/* Hamburger icon */}
      </div>
      {menuOpen && (
        <nav style={menuStyles}>
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', width: '100%' }}>
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={handleInputChange}
              style={{ ...inputStyles, flex: 1 }} // Allow input to take up available space
            />
            <button type="submit" style={buttonStyles}>Search</button>
          </form>
          <Link to="/your-watched" style={linkStyles}>Your Watched</Link>
          <Link to="/write-review" style={linkStyles}>Write a Review</Link>
          <Link to="/login" style={linkStyles}>Login</Link>
        </nav>
      )}
      {/* Render the full menu for larger screens */}
      {window.innerWidth >= 768 && (
        <nav style={navStyles}>
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={handleInputChange}
              style={{ ...inputStyles, flex: 1 }} // Allow input to take up available space
            />
            <button type="submit" style={buttonStyles}>Search</button>
          </form>
          <Link to="/your-watched" style={linkStyles}>Your Watched</Link>
          <Link to="/write-review" style={linkStyles}>Write a Review</Link>
          <Link to="/login" style={linkStyles}>Login</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;