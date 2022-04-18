import React from 'react';
import './Cheakout.css'

const Cheakout = () => {
    return (
        <div className='cheackout'>
            <h2>Please cheak your booking and Confirm.</h2>
            <div className='input-form'>
                <input type="text" name="name" placeholder='Your name' id="" />
                <input type="text" name="address" placeholder='Your address' id="" />
                <input type="email" name="email" placeholder='Email' id="" required />
                <input type="password" name="password" placeholder=' Password' id="" required />
                <input type="submit" value="Confirm" />
            </div>
        </div>
    );
};

export default Cheakout;