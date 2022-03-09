import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';

// const authLog = getAuth();

export const login = (e, autenticacion) => {
  e.preventDefault();

  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('password').value;
  console.log(email);
  console.log(password);

  signInWithEmailAndPassword(autenticacion, email, password)
  .then((userCredential) => { // Signed in
    const user = userCredential.user;
    console.log('entró');

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
};

export const loginGoogleAuth = (e, autenticacion) => {
  e.preventDefault();
  console.log('holi')
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(autenticacion, provider)
    .then((result) => {
      console.log('pasó then')
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
      console.log(error.message)
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // console.log(errorCode, errorMessage, email, credential);
    });
};
