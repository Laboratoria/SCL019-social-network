import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAzB6S1Qq8q2XW6nIFvKLi0tBddOzakP80",
    authDomain: "kitter-a1eab.firebaseapp.com",
    projectId: "kitter-a1eab",
    storageBucket: "kitter-a1eab.appspot.com",
    messagingSenderId: "881521869616",
    appId: "1:881521869616:web:2aab9233d0b74c90c2bef5",
    measurementId: "G-NJMY7FJ0T0"
  };

const app = initializeApp(firebaseConfig)

export default app;