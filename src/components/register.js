import { getAuth, createUserWithEmailAndPassword } from "/firebase/auth";



  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

const register = () => {
const name = document.getElementById('username').value;
const email = document.getElementById ('email').value;
const password = document.getElementById ('password').value;
const confPassword = document.getElementById ('confPassword').value;

}
 
const btnCrear = document.getElementById('btnCrear');
btnCrear.addEventListener('click', register);

const auth = getAuth();
createUserWithEmailAndPassword(auth, username, email, password, confPassword)
  .then((userCredential) => {
    // Signed in 
    const username = userCredential.username;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  export { register, getAuth}