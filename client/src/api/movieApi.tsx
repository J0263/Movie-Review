// client/src/api/movieApi.ts

import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY; 

// Function to fetch movie data from OMDb API
export const fetchMovieData = async (imdbID: string) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
        return response.data; // Return the movie data
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw error; // Rethrow error for handling in the calling function
    }
};