import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import ReviewPage from './pages/ReviewPage';
import './App.css';
// import LoginPage from './pages/LoginPage';
// import WatchedPage from './pages/WatchedPage';
// import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/search" element={<SearchPage />} />
            {/* <Route path="/your-watched" element={<WatchedPage />} /> */}
            <Route path="/write-review" element={<ReviewPage />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="*" element={<div>Page not found</div>} /> {/* Fallback for unknown routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;