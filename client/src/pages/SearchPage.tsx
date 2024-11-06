import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] }; // Default to empty array if no results

  return (
    <div>
      <h2>Search Results</h2>
      {results && results.length > 0 ? (
        <ul>
          {results.map((movie: any) => (
            <li key={movie.imdbID}>{movie.Title}</li> // Adjust how you display movie info
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;