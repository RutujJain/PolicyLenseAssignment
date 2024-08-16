import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

// Import images
import Movieimg1 from '../../Images/Streeimg.avif';
import Movieimg2 from '../../Images/Vedaaimg.avif';
import Movieimg3 from '../../Images/Khelkhelmeen.avif';
import Movieimg4 from '../../Images/mrbachchan.avif'
import Movieimg5 from '../../Images/Doubleismart.avif'
// Update movies array with imported images
const movies = [
    { id: 1, title: 'Stree 2 : Sarkate Ka Aatank', rating: 4.5, image: Movieimg1 },
    { id: 2, title: 'Vedda', rating: 4.8, image: Movieimg2 },
    { id: 3, title: 'Khel Khel mein', rating: 3.7, image: Movieimg3 },
    { id: 4, title: 'Mr Bachchan', rating: 4.6, image: Movieimg4 },
    { id: 5, title: 'Double Issmart', rating: 4.8, image: Movieimg5 },
];

function MovieList() {
    return (
        <div className="movie-list">
            <h2>Movie Reviews</h2>
            <ul>
                {movies.map(movie => (
                    <Link to={`/movie/${movie.id}/${movie.title}`}>
                        <li
                            key={movie.id}
                            style={{
                                backgroundImage: `url(${movie.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >

                            <div className="movie-content">
                                <span>{movie.title}</span>
                                <p>Rating: {movie.rating}/5</p>
                            </div>
                        </li>
                    </Link>

                ))}
            </ul>
        </div>
    );
}

export default MovieList;
