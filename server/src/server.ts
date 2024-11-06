// importing the Express framework to set up the server
import express from 'express';

// importing dotenv to load environment variables from a .env file
import * as dotenv from 'dotenv';

// importing the movie routes, which handle requests related to movies
import movieRoutes from './routes/api/movie';

// load environment variables from the .env file
dotenv.config();

// creating an instance of an Express app
const app = express(); 
// set the port for the server defaulting to 5000 if not specified
const PORT = process.env.PORT || 5000; 

// middleware to parse JSON request bodies
app.use(express.json());

// set up the route for movie-related API requests under /api/movies
app.use('/api/movies', movieRoutes);

// start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// exporting the app for testing or additional configurations
export default app; 