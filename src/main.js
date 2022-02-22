import {signUp } from "./vistas/SignUp.js"; 
import {signIn } from "./vistas/login.js"; 
/*import { FirebaseApp } from "../../compilacion";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
const auth= getAuth(FirebaseApp)*/


const root = document.getElementById("root");

//div Iniciar Sesión

 const iniciar= root.appendChild(signIn());

//div Registrars
let signUpButton = document.getElementById("buttonRegistrar");

signUpButton.addEventListener('click',() => {

        root.innerHTML=" ";
        root.appendChild(signUp());
        root.style.display = "block";
        iniciar.style.display = "none";
});

 

 



















// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();
