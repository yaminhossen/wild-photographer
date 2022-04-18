import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
            </div>
            <div>
                <button className='btn btn-primary w-100'>
                    <img width='30px' className='mx-2' src={logo} alt="" />
                    Google Sing In</button>
            </div>
        </div>
    );
};

export default SocialLogin;