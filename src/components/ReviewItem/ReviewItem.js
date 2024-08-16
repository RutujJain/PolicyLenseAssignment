import React, { useState } from 'react';
import { Rate } from 'antd';
import './ReviewItem.css'
function ReviewItem({ review, deleteReview, updateReview }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(review.text);
    const [editRating, setEditRating] = useState(review.rating);

    const handleSave = () => {
        updateReview({ ...review, text: editText, rating: editRating });
        setIsEditing(false);
    };

    return (
        <div className="review-item">
            {isEditing ? (
                <>
                    <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className='edittextarea'
                    ></textarea>

                    <Rate
                        allowHalf
                        value={editRating}
                        onChange={(value) => setEditRating(value)}
                        className='ratingcolor'
                    />

                    <button onClick={handleSave} className='savebtn'>Save</button>
                </>
            ) : (
                <>
                    <p>{review.text}</p>

                    <Rate allowHalf value={review.rating} disabled className='ratingcolor' />

                    <div className="review-actions">
                        <button onClick={() => setIsEditing(true)} className='editbtn'>Edit</button>
                        <button onClick={() => deleteReview(review.id)} className='deletebtn'>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ReviewItem;
