import React, { useState, useEffect } from 'react';
import { fetchMovieData } from '../api/movieApi'; 
// import Auth from '../utils/auth'; 

const ReviewPage: React.FC = () => {
    // State variables
    const [searchTerm, setSearchTerm] = useState('');
    const [movieData, setMovieData] = useState<any>(null); 
    const [reviews, setReviews] = useState<any[]>([]); 
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    // Handle movie search
    const handleSearch = async () => {
        setError(null); // Clear any previous errors
        if (searchTerm) {
            try {
                const data = await fetchMovieData(searchTerm); 
                if (data.Response === "True") {
                    setMovieData(data);
                } else {
                    setError(data.Error); // Set error message if movie not found
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
                setError('Failed to fetch movie data.');
            }
        }
    };

    // Handle review submission
    const handleSubmitReview = () => {
        if (!reviewText) {
            setError('Please write a review before posting.'); // Ensure review text is provided
            return;
        }

        const newReview = {
            movieTitle: movieData.Title,
            review: reviewText,
            rating: rating,
            imdbID: movieData.imdbID,
        };
        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);
        setReviewText('');
        setRating(0);
        localStorage.setItem('movieReviews', JSON.stringify(updatedReviews)); 
    };

    // Load saved reviews from local storage on component mount
    useEffect(() => {
        const savedReviews = localStorage.getItem('movieReviews');
        if (savedReviews) {
            setReviews(JSON.parse(savedReviews));
        }
    }, []);

    return (
        <div>
            <h1>Review a Movie</h1>
            <input
                type="text"
                placeholder="Search for a movie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

            {movieData && (
                <div>
                    <h2>{movieData.Title}</h2>
                    <img src={movieData.Poster} alt={movieData.Title} />
                    <div>
                        <button onClick={() => setReviewText('')}>Review This Movie</button>
                        <div>
                            <textarea
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                placeholder="Write your review here..."
                            />
                            <div>
                                <span>Rate this movie: </span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        onClick={() => setRating(star)}
                                        style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <button onClick={handleSubmitReview}>Post Review</button>
                        </div>
                    </div>
                </div>
            )}

            <h2>Your Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index}>
                    <h3>{review.movieTitle}</h3>
                    <p>{review.review}</p>
                    <p>Rating: {review.rating} ⭐</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewPage;