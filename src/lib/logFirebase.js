import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

//const authLog = getAuth();

export const login = (e) => {
    e.preventDefault()

    const email = document.getElementById ('email');
    const password = document.getElementById ('password');
    
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => { // Signed in
        const user = userCredential.user;
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

export const googleAuth = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    getRedirectResult(auth)
  
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
      console.log(errorCode, errorMessage, email, credential);
    });
  }
