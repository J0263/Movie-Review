import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchPage: React.FC = () => {
    const location = useLocation();
    const results = location.state?.results?.Search || []; // Access the results safely

    return (
        <div>
            <h1>Search Results</h1>
            {results.length > 0 ? (
                <ul>
                    {results.map((movie: any) => (
                        <li key={movie.imdbID}>
                            <h2>{movie.Title}</h2>
                            <img src={movie.Poster} alt={movie.Title} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
};

export default SearchPage;