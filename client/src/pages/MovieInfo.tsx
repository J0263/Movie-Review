import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieData } from '../api/movieApi';

const MovieInfo: React.FC = () => {
    const location = useLocation(); // get current location from router
    const { movieTitle, reviewText } = location.state; // expecting movie title and review text to be passed
    const [movieData, setMovieData] = useState<any>(null); // state for movie data
    const [loading, setLoading] = useState<boolean>(true); // state for loading status

    useEffect(() => {
        const getMovieData = async () => {
            try {
                const data = await fetchMovieData(movieTitle);
                setMovieData(data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            } finally {
                setLoading(false);
            }
        };

        getMovieData();
    }, [movieTitle]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : movieData && movieData.Response === "True" ? ( // check if movie data is available
                <div>
                    <h1>{movieData.Title}</h1>
                    <img src={movieData.Poster} alt={movieData.Title} />
                    <p>Year: {movieData.Year}</p>
                    <p>Rating: {movieData.Rated}</p>
                    <p>Release Date: {movieData.Released}</p>
                    <p>Runtime: {movieData.Runtime}</p>
                    <p>Director: {movieData.Director}</p>
                    <p>Actors: {movieData.Actors}</p>
                    <p>Box Office: {movieData.BoxOffice}</p>
                    <h2>Your Review</h2>
                    <p>{reviewText}</p> {/* Display the review text */}
                </div>
            ) : (
                <p>Movie not found.</p>
            )}
        </div>
    );
};

export default MovieInfo;