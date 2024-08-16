import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import MovieList from '../components/MovieList/MovieList'
import './MovieReview.css'
function MovieReview() {
    return (
        <>
            <Navbar />
            <div className="movie-searchlist">
                <MovieList />
            </div>
            <Footer />
        </>
    )
}

export default MovieReview
