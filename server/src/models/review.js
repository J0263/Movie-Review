// import DataTypes and Model from Sequelize to define and structure Review model
import { DataTypes, Model } from 'sequelize';
// import Sequelize instance to connect model to the database
import sequelize from '../config/connection.js';
// define the Review class which extends Sequelize's Model class
class Review extends Model {
}
// initializes Review model with attributes that correspond to columns in database
Review.init({
    // foreign key that links to the movie's id in the movies table
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'movies',
            key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE', // deletes associated reviews if a movie is deleted
    },
    // text field for actual review content
    review: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // integer field for rating with validation to allow values between 1 and 10
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 10,
        },
    },
    // date field to track when review was created with a default value of the current date and time
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // defaults to the current date and time
    }
}, 
// passing sequelize instance to associate model with connected database
{ sequelize });
// export Review model to use it in other parts of app
export default Review;
