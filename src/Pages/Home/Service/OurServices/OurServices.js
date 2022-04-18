import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './OurServices.css'

const OurServices = () => {
    const { serviceId } = useParams();
    return (
        <div className='proceed'>
            <h2>Please confirm your registration and login if you signup of signin then you go to the cheackout page. Thank You!</h2>
            <div className='text-center'>
                <Link to="/cheakout">
                    <button className='btn btn-primary'>Proceed Cheakout</button>
                </Link>
            </div>
        </div>
    );
};

export default OurServices;

// import React from 'react';
// import { useParams } from 'react-router-dom';

// const CheckOut = () => {
//     const { serviceId } = useParams();
//     return (
//         <div>
//             <h2>Our services:{serviceId}</h2>
//         </div>
//     );
// };

// export default CheckOut;