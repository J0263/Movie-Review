import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// load environment variables from the .env file
dotenv.config();

// create new Sequelize instance to connect to PostgreSQL database
const sequelize = new Sequelize(
  // database name, using environment variable DB_NAME or defaulting to 'moviedatabase'
  process.env.DB_NAME || 'moviedatabase',
  
  // database user using environment variable DB_USER or default to jorgebush
  process.env.DB_USER || 'jorgebush',
  
  // database password using environment variable DB_PASSWORD or an empty string if not provided
  process.env.DB_PASSWORD || '', // use an empty string if there's no password
  
  {
    // database host using environment variable DB_HOST or defaulting to 'localhost'
    host: process.env.DB_HOST || 'localhost',
    
    // disable logging for Sequelize queries to keep console output clean
    logging: false,
  }
);

// export the Sequelize instance for use in other parts of the application
export default sequelize;