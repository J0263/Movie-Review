import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { fetchMovieData } from '../api/movieApi'; 

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

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // handle input change for search bar
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // handle search action when form is submitted
  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm) {
      try {
        const apiKey = process.env.REACT_APP_OMDB_API_KEY;
        // Fetching movie data from the OMDb API
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
        navigate('/search', { state: { results: response.data } }); // Navigate to search results page
      } catch (error) {
        console.error('Error fetching data from the API', error); // Log any API errors
      }
    }
  };

  return (
    <header style={headerStyles}>
      <h1 style={logoStyles}>Reel Reviews</h1>
      <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleInputChange}
          style={inputStyles}
        />
        <button type="submit" style={buttonStyles}>Search</button>
      </form>
      <nav style={navStyles}>
        <Link to="/your-watched" style={linkStyles}>Your Watched</Link>
        <Link to="/write-review" style={linkStyles}>Write a Review</Link>
        <Link to="/login" style={linkStyles}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;