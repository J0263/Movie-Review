// src/api/movieApi.ts
import axios from 'axios';


const API_KEY = import.meta.env.VITE_REACT_APP_OMDB_API_KEY; 

// Define the structure of the movie data
export interface MovieData {
    Title: string;
    Poster: string;
    imdbID: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Ratings: { Source: string; Value: string }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
    Error?: string;
}

// Function to fetch movie data from OMDb API by title
export const fetchMovieData = async (title: string) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&type=movie&apikey=${API_KEY}`);

        console.log(response.data)

        return response.data; // Return the movie data
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw error; // Rethrow error for handling in the calling function
    }
};