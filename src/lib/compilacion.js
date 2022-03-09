import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, collection, addDoc  } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { getAuth, signInWithPopup, GoogleAuthProvider,
     createUserWithEmailAndPassword, signInWithEmailAndPassword,
      sendEmailVerification,updateProfile 
      // onAuthStateChanged, signOut
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
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => { 
    window.location.hash='#/muro';
    // Signed in
    const user = userCredential.user;
    console.log(user);
    const userName= document.querySelector('#user').value;
    user.displayName = userName;
    console.log(userName);
    
    sendEmailVerification(auth.currentUser)
    .then(() => {
        alert("Email verification sent!")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === "auth/missing-email") {
            alert ("Ingresa un correo")}
        if (errorCode === "auth/invalid-email") {
            alert ("Ingresa un correo válido")}
        if (errorCode === "auth/internal-error") {
            alert ("Error! Intenta con datos correctos")}
        if (errorCode === "auth/wrong-password") {
            alert ("Tú contraseña es inválida")}
        if (errorCode === "auth/email-already-in-use") {
            alert ("Ya estás Registrad@")}
    });
    // sendEmailVerification(auth.currentUser)
    //     .then(() => {
    //         alert("Email verification sent!")
    //     }).catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode, errorMessage);
    // });
}

// Iniciar Sesión con Usuario Guardado

export const iniciaSesion = (email, password) => {
    auth = getAuth();

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => { // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        window.location.hash='#/muro';
    // }).catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode); 
    //     console.log(errorMessage);
    //     if (errorCode === "auth/missing-email") {
    //         alert ("Ingresa un correo")}
    //     if (errorCode === "auth/invalid-email") {
    //         alert ("Ingresa un correo válido")}
    //     if (errorCode === "auth/internal-error") {
    //         alert ("Error! Intenta con datos correctos")}
    //     if (errorCode === "auth/wrong-password") {
    //         alert ("Tú contraseña es inválida")}
    });
}

export const signOut=() => {
    auth = getAuth();
    signOut(auth).then(() => {
        //window.location.hash = '#/login';
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    }

/*export const observador= () => {
    auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
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