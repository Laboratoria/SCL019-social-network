// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Add Firebase products that you want to use
import { auth } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';
import { firestore } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN5A-PYnYar1iY3JtFkWnSEYGNNrH04-Y",
  authDomain: "bazinga-aymlary22.firebaseapp.com",
  projectId: "bazinga-aymlary22",
  storageBucket: "bazinga-aymlary22.appspot.com",
  messagingSenderId: "396585377938",
  appId: "1:396585377938:web:d70f44b54d835342c7864b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// custom code //
//<script type="module" src= "main.js"></script>