// importing DataTypes and Model from Sequelize to define and structure Movie model
import { DataTypes, Model } from 'sequelize';
// importing Sequelize instance to connect model to the database
import sequelize from '../config/connection.js';
// defining Movie class which extends Sequelizes Model class
class Movie extends Model {
}
// initializing Movie model with attributes that correspond to columns in database
Movie.init({
    // title of movie defined as string
    title: DataTypes.STRING,
    // IMDb ID of movie defined as string
    imdb_id: DataTypes.STRING,
    // plot summary of movie, defined as text
    plot: DataTypes.TEXT,
    // path to the movie's poster image, defined as a string
    poster: DataTypes.STRING,
}, 
// pass sequelize instance to associate this model with the connected database
{ sequelize });
// export Movie model to use it in other parts of app
export default Movie;
