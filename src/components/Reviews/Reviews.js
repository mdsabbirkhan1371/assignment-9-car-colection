import React, { useEffect, useState } from 'react';
import useReviewer from '../hooks/useReviers';
import SingleReviw from '../../components/SingleReview/SingleReview'
import './Reviews.css'

const Reviews = () => {
    const [reviewers, setreviwers] = useReviewer()

    return (
        <div className='reviewers'>
            {
                reviewers.map(reviewer => <SingleReviw
                    key={reviewer.id}
                    reviewer={reviewer}
                ></SingleReviw>)
            }
        </div>
    );
};

export default Reviews;