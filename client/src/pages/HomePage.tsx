import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import ReviewPage from './ReviewPage';
import WatchedMovies from './WatchedMovies';

import Header from '../components/Header';
import Footer from '../components/Footer';

const API_KEY = '';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login-page" element={<LoginPage />} />
                <Route path="/profile-page" element={<ProfilePage />} />
                <Route path="/review-page" element={<ReviewPage />} />
                <Route path="/watched-movies" element={<WatchedMovies />} />
            </Routes>
        </Router>
    );
};

interface Movie{
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
}

const HomePage: React.FC = () => {
    const [query, setQuery] = useState<string>(''); //stores input from the search bar
    const [movies, setMovies] = useState<Movie[]>([]); //an array of movies matching the search query, initially set to an empty array
    const [loading, setLoading] = useState<boolean>(false); //a boolean that indicates if the API request is in progress
    const [error, setError] = useState<string | null>(null); //stores any error messages if the API request fails or no movies are found

    const handleSearch = async () => {
        if (!query) return;
        setLoading(true);
        setError(null);
        try{
            const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
            const data = await response.json();
            if (data.Response === 'True') {
                setMovies(data.Search);
            } else {
                setError(data.Error || 'No results found');
            }
        } catch (err) {
            setError('Error fetching movie data');
        } finally {
            setLoading(false);
        }
    };

    return ( 
        //linking pages to the navbar with react-router-dom
        <Container> 
            <Navbar>
                <NavLink to="/login-page">LOGIN</NavLink>
                <NavLink to="/watched-movies">YOUR WATCHED MOVIES</NavLink>
                <NavLink to="/profile-page">ADD TO WATCHLIST</NavLink>
                <NavLink to="/review-page">WRITE A REVIEW</NavLink>
            </Navbar>
            <Content>
                <Title>SEARCH FOR A MOVIE!</Title>
                <SearchContainer>
                    <SearchInput
                        type="text"
                        placeholder="Enter movie title..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <SearchButton onClick={handleSearch}>Search</SearchButton>
                </SearchContainer>
                {loading && <Loading>Loading...</Loading>}
                {error && <Error>{error}</Error>}
                <MoviesContainer>
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID}>
                            <Poster src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} />
                            <MovieTitle>{movie.Title}</MovieTitle>
                            <Year>({movie.Year})</Year>
                        </MovieCard>
                    ))}
                </MoviesContainer>
            </Content>
        </Container>
    );
};

export default HomePage;