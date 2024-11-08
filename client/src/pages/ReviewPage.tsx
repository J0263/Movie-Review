import React, { useState, useEffect } from 'react';
import { fetchMovieData } from '../api/movieApi'; 
import { Link } from 'react-router-dom'; 

const ReviewPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movieData, setMovieData] = useState<any>(null);
    const [reviews, setReviews] = useState<any[]>([]);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm) {
            setLoading(true);
            try {
                const data = await fetchMovieData(searchTerm);
                if (data.Response === "True") {
                    setMovieData(data);
                    setSearchTerm('');
                } else {
                    alert(data.Error); 
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleSubmitReview = () => {
        if (!movieData || !reviewText) {
            alert('Please select a movie and write a review before submitting.');
            return;
        }

        const newReview = { movieTitle: movieData.Title, review: reviewText, rating, imdbID: movieData.imdbID };
        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);
        setReviewText('');
        setRating(0);
        localStorage.setItem('movieReviews', JSON.stringify(updatedReviews));
    };

    useEffect(() => {
        const savedReviews = localStorage.getItem('movieReviews');
        if (savedReviews) {
            setReviews(JSON.parse(savedReviews));
        }
    }, []);

    return (
        <div>
            <h1>Review a Movie</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {movieData && movieData.Response === "True" && (
                <div>
                    <h2>{movieData.Title}</h2> 
                    <img src={movieData.Poster} alt={movieData.Title} style={{ width: '200px' }} /> 
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
            )}
            <h2>Your Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index} style={{
                    border: '1px solid #ccc',
                    padding: '10px',          
                    margin: '10px 0',        
                    borderRadius: '5px',      
                }}>
                    <Link to={`/movie-info`} state={{ movieTitle: review.movieTitle, reviewText: review.review }}> {/* Pass the movieTitle and reviewText as state */}
                        <h3>{review.movieTitle}</h3> {/* Wrap movie title in Link */}
                    </Link>
                    <p>{review.review}</p>
                    <p>Rating: {review.rating} ⭐</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewPage;