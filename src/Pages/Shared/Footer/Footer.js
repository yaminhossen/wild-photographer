import React from 'react';
import './Footer.css'
import copyright from '../../../images/logo/copy.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <p><small>copyright <img width="30px" src={copyright} alt="" /> {year} </small></p>
        </footer>
    );
};

export default Footer;