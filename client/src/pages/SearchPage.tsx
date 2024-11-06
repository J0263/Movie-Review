import React from 'react'; 
import { useLocation } from 'react-router-dom'; 

const SearchPage: React.FC = () => {
  const location = useLocation(); // get current location from router
  const { results } = location.state || { results: [] }; // extract results from location state or default to empty array

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