// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd4hQoX9NBrsrlItV9HH_LPfQYl9Pjt6g",
    authDomain: "wild-photographer-e3afa.firebaseapp.com",
    projectId: "wild-photographer-e3afa",
    storageBucket: "wild-photographer-e3afa.appspot.com",
    messagingSenderId: "505785434366",
    appId: "1:505785434366:web:7585857ab0413ffcaae5af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;