import { getAuth, createUserWithEmailAndPassword } from "/firebase/auth";

  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

const register = () => {
const username = document.getElementById('username').value;
const email = document.getElementById ('email').value;
const password = document.getElementById ('password').value;
const confPassword = document.getElementById ('confPassword').value;
console.log(email);
console.log(password);

const auth = getAuth();
createUserWithEmailAndPassword(auth, username, email, password, confPassword)
  .then((userCredential) => {
    // Signed in 
    const username = userCredential.username;
    const email = userCredential.email;
    const password = userCredential.password;
    const confPassword = userCredential.confPassword;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

}
 
const btnCrear = document.getElementById('btnCrear');
btnCrear.addEventListener('click', register());


  export { register, getAuth}