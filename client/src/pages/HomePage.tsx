import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'ec71b4f6';
const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const MoviePoster: React.FC = () => {
    const [movieData, setMovieData] = useState({Poster:"", Title:""});
    const fetchRandomMovie = async () => {
        try {
            const randomSearchTerm = [
                "Dune: Part Two",
                "Furiosa: A Mad Max Saga",
                "Inside Out 2",
                "Godzilla x Kong: The New Empire",
                "The Fall Guy",
                "Deadpool & Wolverine",
                "Terrifier 3",
                "Bad Boys: Ride or Die",
                "Transformers One",
                "Monkey Man",
                "Kingdom of the Planet of the Apes",
                "Kung Fu Panda 4",
                "Venom: The Last Dance",
                "Sonic the Hedgehog 3",
                "Smile 2",
                "The Wild Robot",
                "Twisters",
                "Despicable Me 4",
                "Alien: Romulus",
              ];
            const randomIndex = Math.floor(Math.random() * randomSearchTerm.length);
            const response = await axios.get(`${OMDB_API_URL}&s=${randomSearchTerm[randomIndex]}`);
            const movies = response.data.Search;
            console.log(movies);
            if (movies && movies.length > 0) {
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setMovieData(randomMovie);
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };
    useEffect(() => {
        fetchRandomMovie();
        const intervalId = setInterval(fetchRandomMovie, 5000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
            <h1 style={{ textDecoration: 'underline', color: '#F0FFCE' }}>Top Movies of 2024</h1>
            <h2 style={{ color: '#CCC9A1' }}>{movieData.Title}</h2>
            {movieData ? <img src={movieData.Poster} alt={movieData.Title}
            style={{ width: '600px',
                border: '8px solid #CCC9A1',
                borderRadius: '10px',
             }} /> : <p>Loading...</p>}
        </div>
    );
};
export default MoviePoster;