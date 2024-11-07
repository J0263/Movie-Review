import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import HomePage from './pages/HomePage'; 
import SearchPage from './pages/SearchPage';
<<<<<<< HEAD
// import WatchedPage from './pages/WatchedPage';
// import ReviewPage from './pages/ReviewPage';
import LoginPage from './pages/LoginPage';
=======
import ReviewPage from './pages/ReviewPage';
>>>>>>> 0671b07d5f143bc36b5d173d80d230e150eb652e
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
            {/* <Route path="/your-watched" element={<WatchedPage />} /> */}
<<<<<<< HEAD
            {/* <Route path="/write-review" element={<ReviewPage />} /> */}
            <Route path="/login" element={<LoginPage />} />
=======
            <Route path="/write-review" element={<ReviewPage />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="*" element={<div>Page not found</div>} /> {/* Fallback for unknown routes */}
>>>>>>> 0671b07d5f143bc36b5d173d80d230e150eb652e
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;