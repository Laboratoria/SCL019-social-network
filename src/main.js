import {signUp } from "./vistas/SignUp.js"; 
import {signIn } from "./vistas/login.js"; 
/*import { FirebaseApp } from "../../compilacion";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
const auth= getAuth(FirebaseApp)*/


const root = document.getElementById("root");

//div Iniciar Sesión
 let div= document.createElement("div");
 div.innerHTML +=signIn();
 root.appendChild(div);

//div Registrarse
 root.appendChild(signUp());


 

 



















// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();
