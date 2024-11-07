import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import HomePage from './pages/HomePage'; 
import SearchPage from './pages/SearchPage';
// import WatchedPage from './pages/WatchedPage'; 
import ReviewPage from './pages/ReviewPage';
import LoginPage from './pages/LoginPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/review/:imdbID" element={<ReviewPage />} />
            {/* <Route path="/your-watched" element={<WatchedPage />} /> */}
            <Route path="/write-review" element={<ReviewPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;