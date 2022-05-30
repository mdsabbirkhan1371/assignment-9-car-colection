import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const { name, picture, country, ratings } = props.reviewer;

    return (
        <div className='single-reviewer'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Country: {country}</p>
            <p><small>Ratings: {ratings} star</small></p>
        </div>
    );
};

export default SingleReview;