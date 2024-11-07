import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage: React.FC = () => {
    const location = useLocation();
    const results = location.state?.results?.Search || []; // Access the results safely

  return (
    <div>
      <h2>Search Results</h2> {/* display title for search results */}
      {results && results.length > 0 ? ( // check if results exist and have length
        <ul> 
          {results.map((movie: any) => ( // iterate over results array
            <li key={movie.imdbID}>{movie.Title}</li> // display movie title in list item
          ))}
        </ul> 
      ) : (
        <p>No results found.</p> 
      )}
    </div>
  );
};

export default SearchPage;