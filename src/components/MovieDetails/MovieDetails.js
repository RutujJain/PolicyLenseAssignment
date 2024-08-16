import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import ReviewForm from '../ReviewForm/ReviewForm';
import './Moviedetails.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function MovieDetails() {
    const { id, title } = useParams();
    const [reviews, setReviews] = useState([
        { id: id, text: 'Amazing movie!', rating: 5 },
    ]);

    const addReview = (review) => {
        setReviews([...reviews, { id: reviews.length + 1, ...review }]);
    };

    const deleteReview = (reviewId) => {
        setReviews(reviews.filter((review) => review.id !== reviewId));
    };

    const updateReview = (updatedReview) => {
        setReviews(
            reviews.map((review) =>
                review.id === updatedReview.id ? updatedReview : review
            )
        );
    };

    return (
        <>
            <Navbar />
            <div className="movie-details">
                <h2>{title}</h2>
                <ReviewForm addReview={addReview} />
                <h3>Reviews</h3>
                {reviews.map((review) => (
                    <ReviewItem
                        key={review.id}
                        review={review}
                        deleteReview={deleteReview}
                        updateReview={updateReview}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default MovieDetails;
