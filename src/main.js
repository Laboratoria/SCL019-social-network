import {signUp } from "./vistas/SignUp.js"; 
import {signIn } from "./vistas/SignIn.js"; 
/*import { FirebaseApp } from "../../compilacion";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
const auth= getAuth(FirebaseApp)*/

//div que contiene formularios en Html
const root = document.getElementById("root");
// Iniciar Sesión
export const iniciar= root.appendChild(signIn());
//Registrar
let signUpButton = document.getElementById("buttonRegistrar");

  signUpButton.addEventListener('click',() => {

        root.innerHTML=" "; 
        root.appendChild(signUp());
        signUp().style.display = "block";
        iniciar.style.display = "none";
let btnSU=document.getElementById('button-SignUp');

  btnSU.addEventListener('click', (e) => {
    e.preventDefault();       
let signupEmail = document.getElementById('Email').value;
let signupContraseña = document.getElementById('password').value;
console.log(signupEmail, signupContraseña );
      }
      ); 
  });

  
 



















// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();
