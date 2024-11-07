import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';


const API_KEY = 'ec71b4f6';
const OMDB_API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const MoviePoster: React.FC = () => {
    const [posterUrl, setPosterUrl] = useState<string | null>(null);

    const fetchRandomMovie = async () => {
        try {
            const randomSearchTerm = String.fromCharCode(97 + Math.floor(Math.random() * 26));
            const response = await axios.get(`${OMDB_API_URL}&s=${randomSearchTerm}`);
            const movies = response.data.Search;

            if (movies && movies.length > 0) {
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setPosterUrl(randomMovie.Poster);
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    useEffect(() => {
        fetchRandomMovie();

        const intervalId = setInterval(fetchRandomMovie, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {posterUrl ? <img src={posterUrl} alt="Movie Poster" style={{ width: '200px' }} /> : <p>Loading...</p>}
        </div>
    );
};

export default MoviePoster;

// interface Movie {
//     title: string;
//     year: string;
//     poster: string;
//     imdbID: string;
// }

// const HomePage: React.FC = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const fetchTopMovies = async () => {
//         try {
//             const response = await fetch(`https://www.omdbapi.com/?s=top&type=movie&apikey=${API_KEY}`);
//             const data = await response.json();
//             if (data.Response === 'True') {
//                 setMovies(data.Search);
//             }
//         } catch (err) {
//           console.error("Failed to fetch movies:", err);
//         }
//         };

//         fetchTopMovies();
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
//         }, 5000);
//         return() => clearInterval(interval);
//     }, [movies]);

//     if (movies.length === 0) return <div>Loading top movies...</div>;

//     // const { Title, Year, Poster } = movies[currentIndex];

//     return (
//         // <div className="top-movie-randomizer">Hello</div>
//             <div id="movie-poster"></div>
//         // <div className='top-movie-container'>
//         //     <Header />
//         //     <div className='top-movie-content'>
//         //         <div>Top Movies of the Month</div>
//         //         <div>
//         //             <Poster src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300'} alt={Title} />
//         //             <div>
//         //                 <div>{Title}</div>
//         //                 <div>({Year})</div>
//         //             </div>
//         //         </div>
//         //     </div>
//         //     <Footer />
//         // </div>
//     );
// };

// export default HomePage;
