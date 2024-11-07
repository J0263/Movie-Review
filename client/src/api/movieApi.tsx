// src/api/movieApi.ts
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY; // Make sure to set this in your .env file

// Function to fetch movie data from OMDb API by title
export const fetchMovieData = async (title: string) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${encodeURIComponent(title)}&apikey=${API_KEY}`);
        return response.data; // Return the movie data
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw error; // Rethrow error for handling in the calling function
    }
};