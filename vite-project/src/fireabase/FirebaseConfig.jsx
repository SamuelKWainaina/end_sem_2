// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics'; // Add this line

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBIZTfx5GwvUsH8GZB5jIs6jAQxsqo2818",
  authDomain: "wondereats-22850.firebaseapp.com",
  projectId: "wondereats-22850",
  storageBucket: "wondereats-22850.appspot.com",
  messagingSenderId: "324010108819",
  appId: "1:324010108819:web:63c0d6c19f0045dabbaa66",
  measurementId: "G-LMTQ8BF1PP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Add this line
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}