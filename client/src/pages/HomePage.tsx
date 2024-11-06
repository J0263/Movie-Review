import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const API_KEY = 'ec71b4f6';

interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
}

const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchTopMovies = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=top&type=movie&apikey=${API_KEY}`);
            const data = await response.json();
            if (data.Response === 'True') {
                setMovies(data.Search);
            }
        } catch (err) {
          console.error("Failed to fetch movies:", err);
        }
        };

        fetchTopMovies();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        }, 5000);
        return() => clearInterval(interval);
    }, [movies]);

    // // if (movies.length === 0) return <Loading>Loading top movies...</Loading>;

    // // const { Title, Year, Poster } = movies[currentIndex];

    // // return (
    // //     <Container>
    // //         <Header />
    // //         <Content>
    // //             <TitleText>Top Movies of the Month</TitleText>
    // //             <MovieContainer>
    // //                 <Poster src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300'} alt={Title} />
    // //                 <MovieInfo>
    // //                     <MovieTitle>{Title}</MovieTitle>
    // //                     <MovieYear>({Year})</MovieYear>
    // //                 </MovieInfo>
    // //             </MovieContainer>
    // //         </Content>
    // //         <Footer />
    // //     </Container>
    // );
};

export default HomePage;


