import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './HomePage.css'
import MovieList from '../components/MovieList/MovieList'
import Streeimg from '../Images/Stree2img.webp'
import Footer from '../components/Footer/Footer'
import ImageSlider from '../components/ImageSlider/ImageSlider'
function HomePage() {
    return (
        <>
            <div className="homepage-maincontainer">
                <Navbar />
                <div className="homepage-container1">
                    <div className="imageslider">
                        <ImageSlider />
                    </div>
                </div>
                <div className="movieslist">
                    <MovieList />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage
