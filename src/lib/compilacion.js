import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, collection, addDoc  } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import {
    getAuth, signInWithPopup, GoogleAuthProvider,
    createUserWithEmailAndPassword,
     signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN5A-PYnYar1iY3JtFkWnSEYGNNrH04-Y",
    authDomain: "bazinga-aymlary22.firebaseapp.com",
    projectId: "bazinga-aymlary22",
    storageBucket: "bazinga-aymlary22.appspot.com",
    messagingSenderId: "396585377938",
    appId: "1:396585377938:web:d70f44b54d835342c7864b"
};

let auth;
let provider;
let db;
// Initialize Firebase

export const firebaseInit = () => {
    initializeApp(firebaseConfig);
    auth = getAuth();
    provider = new GoogleAuthProvider();
    db = getFirestore();
}


export const authGoogle = () => {
    signInWithPopup(auth, provider).then((result) => { // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
          window.location.hash='#/muro';
        // ...
    }).catch((error) => { // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}

// Iniciando autenficación con Usuario email and password
export const register = (email, password) => {
    auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => { // Signed in
        const user = userCredential.user;
        console.log(user);
        window.location.hash='#/login';
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

// Iniciar Sesión con Usuario Guardado

export const iniciaSesion = (email, password) => {
    auth = getAuth();

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => { // Signed in
        const user = userCredential.user;
        // ...
        window.location.hash='#/muro'
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}


/*const guardarUser = () => {
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}*/


