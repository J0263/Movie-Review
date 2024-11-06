import React, { useState } from 'react';
import styled from 'styled-components';

const API_KEY = 'your_omdb_api_key'; // Replace with your OMDb API key

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

const HomePage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === "True") {
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
    <Container>
      <Navbar>
        <NavButton>Login</NavButton>
        <NavButton>Home</NavButton>
        <NavButton>Top Movies</NavButton>
        <NavButton>Genres</NavButton>
      </Navbar>
      <Content>
        <Title>Search for a Movie</Title>
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