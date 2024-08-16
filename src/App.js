import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import HomePage from './Pages/HomePage';
import MovieReview from './Pages/MovieReview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movielist" element={<MovieReview />} />
        <Route path="/movie/:id/:title" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
