import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchPage: React.FC = () => {
    const location = useLocation();
    const results = location.state?.results?.Search || []; // access the results safely

    return (
        <div>
            <h2>Search Results</h2> {/* Display title for search results */}
            {results && results.length > 0 ? ( 
                <ul style={{ listStyleType: 'none', padding: 0 }}> {/* remove bullet points */}
                    {results.map((movie: any) => ( 
                        <li key={movie.imdbID}>
                            <Link to={`/review/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'black' }}> {/* link to ReviewPage with movie id */}
                                <h2>{movie.Title}</h2> {/* display movie title */}
                            </Link>
                            <img src={movie.Poster} alt={movie.Title} /> {/* display movie poster */}
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
