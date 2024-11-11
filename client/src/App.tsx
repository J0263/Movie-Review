import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; 
import SearchPage from './pages/SearchPage';
import ReviewPage from './pages/ReviewPage';
import MovieInfo from './pages/MovieInfo';
import LoginPage from './pages/LoginPage';
import './App.css';
import WatchedPage from './pages/WatchedPage';

const App = () => {
  return (
    <div>
    <Router>
      
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/review/:imdbID" element={<ReviewPage />} />
            <Route path="/movie-info" element={<MovieInfo />} />
            <Route path="/your-watched" element={<WatchedPage/>} />
            <Route path="/write-review" element={<ReviewPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="" element={<div>Page not found</div>} /> {/* Fallback for unknown routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </div>
  );
};

export default App;