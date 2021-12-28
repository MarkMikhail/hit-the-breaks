// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5gLGRU6Ir48C7gFSpOobRZLmls-Y0RBA",
  authDomain: "hit-the-breaks.firebaseapp.com",
  projectId: "hit-the-breaks",
  storageBucket: "hit-the-breaks.appspot.com",
  messagingSenderId: "114499959496",
  appId: "1:114499959496:web:de184f73bb7ef3628d83fd",
  measurementId: "G-CVTFWMNQ04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;