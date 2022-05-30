import React, { useState } from 'react';
import useReviewer from '../hooks/useReviers';
import Review3 from '../Review3/Review3';
import './SeeMore.css'

const SeeMore = () => {

    const [reviewers, setreviwers] = useReviewer()
    const [review, setreviwe] = useState(3)

    const slice = reviewers.slice(0, review);
    const loadMore = () => {
        setreviwe(review + review)
    }
    return (
        <div>
            <h1 id='reviewer'>Reviewer</h1>

            <div className='review-section'>
                {
                    slice.map(reviewer => <Review3
                        reviewer={reviewer}
                        key={reviewer.id}
                    ></Review3>)
                }

            </div>
            <button className='button-color' onClick={() => loadMore()}>See More</button>
        </div>
    );
};

export default SeeMore;