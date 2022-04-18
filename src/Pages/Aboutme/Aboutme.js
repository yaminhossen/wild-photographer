import React from 'react';
import './Aboutme.css'

const Aboutme = () => {
    return (
        <div className='about-me'>
            <h1>This is about me</h1>
            <div className='about-me-info'>
                <h2><span className='orange'>Name: </span> Yamin Hossain</h2>
                <h4><span className='orange'>Goal: </span> Now my goal is how to become a good web developer. As soon as possible.Then I want to do a good job in this field. This is my goal at this moment.</h4>
                <h4><span className='orange'>My perseverance: </span>  In order to reach my goal, I often give up my many desires. I don't go anywhere until I have solved my problem. I haven't even attended many events for achive my goal. I want to keep trying until I reach my goal. </h4>
            </div>
        </div>
    );
};

export default Aboutme;