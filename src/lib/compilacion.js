import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

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
// Initialize Firebase
export const firebaseInit = () => {
  initializeApp(firebaseConfig);
  auth = getAuth();
  provider = new GoogleAuthProvider ();
}

export const authGoogle = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
