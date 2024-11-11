import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 


interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
}

const WatchedPage = () => {
  const [watchedMovies, setWatchedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Get the saved reviews from localStorage
    const savedReviews = localStorage.getItem('movieReviews');
    
    if (savedReviews) {
      // Parse the saved reviews data from localStorage
      const parsedData = JSON.parse(savedReviews);
      setWatchedMovies(parsedData?.watchedMovies || []); // Set the movies into state
    }
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  return (
    <div>
      <h2>Your Watched List:</h2>
      
      {/* If there are no movies, show a fallback message */}
      <ul style={{ listStyleType: '200px', padding: 0 }}>
        {watchedMovies.length > 0 ? (
          watchedMovies.map((movie) => (
            <li key={movie.imdbID} style={{ marginBottom: '20px', textAlign: 'center' }}>
              <Link 
                to={`/movie-info/${movie.imdbID}`} 
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <h3>{movie.Title}</h3> {/* Display movie title */}
              </Link>
              <img 
                src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200'} 
                alt={movie.Title} 
                style={{ width: '200px', borderRadius: '8px', marginTop: '10px' }} 
              /> {/* Display movie poster with fallback */}
            </li>
          ))
        ) : (
          <p>No watched movies to display.</p> // Fallback message
        )}
      </ul>
    </div>
  );
};

export default WatchedPage;
