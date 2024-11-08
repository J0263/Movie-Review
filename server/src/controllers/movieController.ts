import axios from 'axios';
import { Request, Response } from 'express';

// define asynchronous function to fetch movie data
export const fetchMovieData = async (req: Request, res: Response) => {
  // retrieve the imdbID from the query parameters
  const { imdbID } = req.query;

  // retrieve OMDb API key from environment variables
  const apiKey = process.env.OMDB_API_KEY;

  // check if imdbID is missing or not a string, and return a 400 error if invalid
  if (!imdbID || typeof imdbID !== 'string') {
    return res.status(400).json({ error: "Missing or invalid 'imdbID' parameter" });
  }

  // construct URL to fetch movie details from the OMDb API
  const detailsUrl = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
  
  // construct URL to fetch the movie poster
  const posterUrl = `http://img.omdbapi.com/?i=${imdbID}&h=600&apikey=${apiKey}`;

  try {
    // make a GET request to the OMDb API to get movie details
    const response = await axios.get(detailsUrl);

    // check if the response from OMDb is successful
    if (response.data.Response === "True") {
      // send the movie details and poster URL as a JSON response
      
       return res.json({
        details: response.data, // movie details from OMDb
        poster: posterUrl       // URL for the movie poster
      });
    } else {
      // if OMDb response was unsuccessful send a 404 error with error message
       return res.status(404).json({ error: response.data.Error });
    }
  } catch (error) {
    // handle any errors in request and send a 500 error response
    return res.status(500).json({ error: 'Failed to fetch movie data' });
  }
};