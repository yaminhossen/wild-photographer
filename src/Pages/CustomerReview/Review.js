import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { img, person, name, description, service } = review;
    return (
        <div className='review'>
            <div className='service-images'>
                <img className='img-fluid' src={img} alt="" />
                <h5>Service Name: {service}</h5>

            </div>
            <div className='d-flex align-items-center'>
                <div>
                    <img className='person' src={person} alt="" />
                </div>
                <div className='customer-details'>
                    <h4>Name:{name}</h4>
                    <p>Comments:{description}</p>
                    <p><small>Ratings: 4.5 star</small></p>
                </div>
            </div>
        </div>
    );
};

export default Review;