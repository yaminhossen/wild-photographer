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
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p><small>description{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-warning'>Book:{name}</button>
        </div>
    );
};

export default Service;