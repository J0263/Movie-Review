import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
// import WatchedPage from './pages/WatchedPage';
// import ReviewPage from './pages/ReviewPage';
// import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* <HomePage/> */}
    <Router>
      
      <div className="app">
        <Header />
        
        <main style={{ marginTop: '80px', padding: '2rem 1rem' }}> {/* Adjust margin-top to match header height */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            {/* <Route path="/your-watched" element={<WatchedPage />} />
            <Route path="/write-review" element={<ReviewPage />} />
            <Route path="/login" element={<LoginPage />} /> */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;