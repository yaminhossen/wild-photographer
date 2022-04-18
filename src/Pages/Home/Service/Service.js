import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price, id } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='img-fluid' src={img} alt="" />
            <div className='service-info'>
                <h2>{name}</h2>
                <p>price : $ {price}</p>
                <p><small>description{description}</small></p>
            </div>
            <button onClick={() => navigateToServiceDetail(id)} >Booking for : {name}</button>
        </div>
    );
};

export default Service;