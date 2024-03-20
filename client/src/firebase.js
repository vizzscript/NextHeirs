// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVBr_Tvn2F0wlUfYpDd9QHarCAlriwnag",
  authDomain: "nextheirs-authentication.firebaseapp.com",
  projectId: "nextheirs-authentication",
  storageBucket: "nextheirs-authentication.appspot.com",
  messagingSenderId: "401397989588",
  appId: "1:401397989588:web:be43f8f20e1e0b82197b41",
  measurementId: "G-Y7Q0E9MMGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;