// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: "drink-website.firebaseapp.com",

  projectId: "drink-website",

  storageBucket: "drink-website.appspot.com",

  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGESENDER_ID ,

  appId: process.env.REACT_APP_FIREBASE_API_ID,

  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);