import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchPage: React.FC = () => {
    const location = useLocation();
    const results = location.state?.results?.Search || []; // Access the results safely

    return (
        <div>
            <h2>Search Results</h2> {/* Display title for search results */}
            {results && results.length > 0 ? ( // Check if results exist and have length
                <ul style={{ listStyleType: 'none', padding: 0 }}> {/* Remove bullet points */}
                    {results.map((movie: any) => ( // Iterate over results array
                        <li key={movie.imdbID}>
                            <Link to={`/review/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'black' }}> {/* Link to ReviewPage with movie ID */}
                                <h2>{movie.Title}</h2> {/* Display movie title */}
                            </Link>
                            <img src={movie.Poster} alt={movie.Title} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p> 
            )}
        </div>
    );
};

export default SearchPage;