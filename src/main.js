import {signUp } from "./vistas/SignUp.js"; 
import {signIn } from "./vistas/login.js"; 
import {authGoogle} from "./assets/login-assets.js"
/*import { FirebaseApp } from "../../compilacion";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
const auth= getAuth(FirebaseApp)*/

//div que contiene formularios en Html
const root = document.getElementById("root");

// Iniciar Sesión
const iniciar= root.appendChild(signIn());

//Registrar
let signUpButton = document.getElementById("buttonRegistrar");

signUpButton.addEventListener('click',() => {

        root.innerHTML=" ";
        root.appendChild(signUp());
        root.style.display = "block";
        iniciar.style.display = "none";
});

//Login with google
document.getElementById('iniciaGoogle').addEventListener('click',()=>{
        authGoogle();
});

 

 



















// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();
