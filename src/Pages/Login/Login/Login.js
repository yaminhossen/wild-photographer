import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>


    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-primary text-center'>please login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-100 my-4 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to this site? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister}>please register</Link></p>
            <p>Forgete Password? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;