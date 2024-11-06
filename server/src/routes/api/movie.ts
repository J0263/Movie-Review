// import the Router object from Express to create modular route handlers
import { Router } from 'express';

// importing fetchMovieData controller function to handle movie data fetching logic
import { fetchMovieData } from '../../controllers/movieController';

// creating new router instance
const router = Router();

// defining GET route at /movie that uses the fetchMovieData controller to fetch movie details by IMDb ID
router.get('/movie', fetchMovieData);

// exporting  router so it can be used in the main server file
export default router;