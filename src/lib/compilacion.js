import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, collection, 
        addDoc, getDocs,
        deleteDoc, doc,  updateDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
//
import {
    getAuth, signInWithPopup, GoogleAuthProvider,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    sendEmailVerification, signOut, onAuthStateChanged
    // onAuthStateChanged, updateProfile
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

export let auth;
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
        window.location.hash = '#/muro' 
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
export const register = (email, password,name) => {
    auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, name).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
         name = user.displayName; 
         console.log(name);

        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Email verification sent!")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

            window.location.hash='#/muro';
            return user
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode === "auth/missing-email") {
            alert("Ingresa un correo")
        }
        if (errorCode === "auth/invalid-email") {
            alert("Ingresa un correo válido")
        }
        if (errorCode === "auth/internal-error") {
            alert("Error! Intenta con datos correctos")
        }
        if (errorCode === "auth/wrong-password") {
            alert("Tú contraseña es inválida")
        }
        if (errorCode === "auth/email-already-in-use") {
            alert("Ya estás Registrad@")
        }
    });
}


// Iniciar Sesión con Usuario Guardado

export const iniciaSesion = (email, password) => {
    auth = getAuth();
   signInWithEmailAndPassword(auth, email, password).then((userCredential) => { // Signed in
        const user = userCredential.user;
        console.log(user);
        window.location.hash='#/muro'
       //  ...
}).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode === "auth/missing-email") {
            alert("Ingresa un correo")
        }
        if (errorCode === "auth/invalid-email") {
            alert("Ingresa un correo válido")
        }
        if (errorCode === "auth/internal-error") {
            alert("Error! Intenta con datos correctos")
        }
        if (errorCode === "auth/wrong-password") {
            alert("Tú contraseña es inválida")
        }
        if (errorCode === "auth/user-not-found") {
            alert("Si quieres entrar a Bazinga, Regístrate")
        }
       
    });
      
}



export const observer = () => { 
    onAuthStateChanged(auth, (user) => {
        console.log(user)
            const uid = auth.currentUser.uid;
            console.log(user);  

            if(user == null){
            alert("No hay usuario");
            return window.location.hash = '#/login';
            }
    })
}

    

export const guardarPost = async (title, description) => {
   let userName;
    // si el usuario se registró sin google (es decir no se guardó su displayName)
    // al momento de crear el post
    // su nombre será el email.
    if (auth.currentUser.displayName === null) {
      userName = auth.currentUser.email;
    } else {
      userName = auth.currentUser.displayName;
    };
const comenzar = await addDoc(collection(db, "Mensaje"), {
        title,
        description,
        userName,
    });
    console.log(comenzar.id);
}


export const getTasks = () => getDocs(collection(db, "Mensaje"));

export const muroBazinga = async () => {
   const querySnapshot = await getDocs(collection(db, "Mensaje"));
   console.log(querySnapshot);
   const arr = [];
   querySnapshot.forEach(post => arr.push(Object.assign(post.data(), {'id': post.id}))) 
  return arr;
}

export const deleteJoke = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, 'Mensaje', id));
};
 export const getPost = (id) => getDoc(doc(db, 'Mensaje', id ));

export const editJoke = (id, title, description) => 
    updateDoc(doc(db, 'Mensaje', id),
    title,
    description,
    );


export const signingOut = () => {
    auth = getAuth();
    signOut(auth).then(() => {
        window.location.hash = '#/welcome';
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
