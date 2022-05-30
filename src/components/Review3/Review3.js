
import './Review3.css'
const Review3 = (props) => {

    const { name, picture, ratings, country } = props.reviewer;
    return (
        <div className='review'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Country: {country}</p>
            <p><small>Ratings: {ratings} star</small></p>
        </div>
    );

};

export default Review3;

{/* <div className='review'>
                <h1>Customer Reviews{reviewers.length}</h1>
                <div className='item'>
                    {
                        reviewers.map(review => < Review3
                            key={review.id}
                            review={review}
                        ></Review3>)
                    }

                </div>
            </div> */}