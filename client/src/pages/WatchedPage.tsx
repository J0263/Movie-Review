import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Review {
  imdbID: string;
  movieTitle: string;
  review: string;
  rating: number;
}

interface MovieDetails extends Review {
  Year: string;
}

const WatchedPage = () => {
  const [watchedMovies, setWatchedMovies] = useState<MovieDetails[]>([]);

  // Define the type for the API response
  interface ApiResponse {
    Year: string;
  }

  // Function to fetch movie details based on imdbID
  const fetchMovieDetails = async (imdbID: string): Promise<ApiResponse | null> => {
    const API_KEY = import.meta.env.VITE_REACT_APP_OMDB_API_KEY;
    try {
      const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
      return response.data as ApiResponse;
    } catch (error) {
      console.error(`Error fetching data for imdbID ${imdbID}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const loadWatchedMovies = async () => {
      const savedReviews = localStorage.getItem('movieReviews');
      if (savedReviews) {
        const parsedData: Review[] = JSON.parse(savedReviews);

        // Fetch additional details for each movie in parallel
        const moviesWithDetails = await Promise.all(
          parsedData.map(async (review) => {
            const movieDetails = await fetchMovieDetails(review.imdbID);
            return {
              ...review,
              Year: movieDetails?.Year || 'N/A',
            };
          })
        );

        setWatchedMovies(moviesWithDetails as MovieDetails[]);
      }
    };

    loadWatchedMovies();
  }, []);

  return (
    <div>
      <h2>Your Watched List:</h2>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {watchedMovies.length > 0 ? (
          watchedMovies.map((movie) => (
            <li key={movie.imdbID} style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '20px',
              textAlign: 'center',
              borderRadius: '5px',
            }}>
              <Link 
                to={`/movie-info`} 
                style={{ textDecoration: 'none', color: 'black' }}
                state={{ movieTitle: movie.movieTitle, reviewText: movie.review }}
              >
                <h3>{movie.movieTitle} ({movie.Year})</h3> {/* Display title and year */}
              </Link>
              <p>Rating: {movie.rating} ⭐</p> {/* Display rating */}
              <p>Review: {movie.review}</p> {/* Display review text */}
            </li>
          ))
        ) : (
          <p>No watched movies to display.</p>
        )}
      </ul>
    </div>
  );
};

export default WatchedPage;