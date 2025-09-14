// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD1hV4wte0yi_chYoVToJ79wxm0hQh-Gs",
  authDomain: "roiclub.firebaseapp.com",
  projectId: "roiclub",
  storageBucket: "roiclub.firebasestorage.app",
  messagingSenderId: "14423028820",
  appId: "1:14423028820:web:bfa61763ed4a44320ee9c1",
  measurementId: "G-GK18B6H41B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
