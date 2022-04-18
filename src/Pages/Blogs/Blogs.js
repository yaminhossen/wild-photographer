import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-section'>
            <h1>Here have some significant question answer.</h1>
            <div>
                <h2>1. Difference between authorization and authentication:</h2>
                <p>Answer: Authentication is the process where recognizie the user identity. is this  user is valid it is a process for proving that this user is genuine by their username password and some different type of data.
                    <br />
                    <br />
                    And authorization meaning giving permission. It is a process that giving someone permission for ability to access a site or resourse.
                </p>
            </div>
            <div>
                <h2>2. Why are you using firebase? and what other option?</h2>
                <p>Answer:Firebase is the complete package that allows to build web apps. Quick display data in the application. The firebase is the realtime database platform for built applications and its allowing access the database directly. And create application without backend server. And its easier bundling.
                    <br />
                    <br />
                    Other options: <ul>
                        <li>Auth0</li>
                        <li>Okta</li>
                        <li>KeyCloak</li>
                        <li>Amazon Cognito</li>
                        <li>MongoDB</li>
                    </ul> </p>
            </div>
            <div>
                <h2>3. What other service does firebase without authentication?</h2>
                <p>Answer:
                    <br />
                    <ul>
                        <li>Cloud Firestore</li>
                        <li>Hosting</li>
                        <li>Google Analytics</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Link</li>
                        <li>Predictions</li>
                        <li>Cloud Storage</li>
                    </ul> </p>
            </div>
        </div>
    );
};

export default Blogs;