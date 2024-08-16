import React, { useState } from 'react';
import './ReviewForm.css'
import { Rate } from 'antd'
function ReviewForm({ addReview }) {
    const [reviewText, setReviewText] = useState('');
    // const [rating, setRating] = useState(5);
    const [rating, setRating] = useState(4.5);
    const handleSubmit = (e) => {
        e.preventDefault();
        addReview({ text: reviewText, rating });
        setReviewText('');
        setRating(5);
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your review here..."
                required
            ></textarea>
            <div className='ratingcontainer'>
                <span>{rating}</span>
                <Rate
                    allowHalf
                    value={rating}
                    onChange={(value) => setRating(value)} // Update state on change
                    className="ratingcolor"
                />
                {/* Display selected rating value (Optional) */}
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
}

export default ReviewForm;
