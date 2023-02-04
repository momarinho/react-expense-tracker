// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkQG0wnfGkco_w6OYPucH0T4wAa45ROoQ",
    authDomain: "expense-tracker-431bb.firebaseapp.com",
    projectId: "expense-tracker-431bb",
    storageBucket: "expense-tracker-431bb.appspot.com",
    messagingSenderId: "834128079825",
    appId: "1:834128079825:web:a9ba5c96b2f2b225180ef0",
    measurementId: "G-2J74HS66P7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
