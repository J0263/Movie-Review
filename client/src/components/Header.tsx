import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// styles for the header container
const headerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#280004', // main background color
  position: 'sticky', // Change this to 'sticky'
  top: 0,
  width: '100vw',
  zIndex: 1000,
  boxSizing: 'border-box',
  padding: '1rem 1.5rem',
};

const logoContainerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
};

const logoStyles: React.CSSProperties = {
  fontSize: '2rem',
  color: '#F0FFCE',
};

const navStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
};

const linkStyles: React.CSSProperties = {
  color: '#CCC9A1',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'normal',
  transition: 'color 0.3s',
};

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for the search input
  const navigate = useNavigate(); // Hook to navigate to the search results page

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update the search term state
  };

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    if (searchTerm) {
      try {
        const apiKey = process.env.REACT_APP_OMDB_API_KEY; // Use your API key here
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
        // Handle the response data, e.g., navigate to a results page
        console.log(response.data); // For testing, log the results to the console
        navigate('/search', { state: { results: response.data } }); // Navigate to search page with results
      } catch (error) {
        console.error('Error fetching data from the API', error);
      }
    }
  };

  return (
    <header style={headerStyles}>
      <div style={logoContainerStyles}>
        <h1 style={logoStyles}>Reel Reviews</h1>
        <nav style={navStyles}>
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={handleInputChange}
              style={{ padding: '0.5rem', borderRadius: '4px' }}
            />
            <button type="submit" style={{ marginLeft: '0.5rem', padding: '0.5rem' }}>Search</button>
          </form>
          <a href="#your-watched" style={linkStyles}>Your Watched</a>
          <a href="#write-review" style={linkStyles}>Write a Review</a>
          <a href="#login" style={linkStyles}>Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;