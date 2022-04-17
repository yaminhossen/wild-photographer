import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p><small>description{description}</small></p>
        </div>
    );
};

export default Service;