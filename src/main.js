import { signUp } from "./vistas/SignUp.js";
import { signIn } from "./vistas/SignIn.js";
import { firebaseInit, authGoogle, register, iniciaSesion } from "./lib/compilacion.js";

//div que contiene formularios en Html
const root = document.getElementById("root");
// Iniciar Sesión
export const iniciar = root.appendChild(signIn());
//Registrar
let signUpButton = document.getElementById("buttonRegistrar");

signUpButton.addEventListener('click', () => {

  root.innerHTML = " ";
  root.appendChild(signUp());
  signUp().style.display = "block";
  iniciar.style.display = "none";
  let btnSU = document.getElementById('button-SignUp');
  btnSU.addEventListener('click', (e) => {
    e.preventDefault();
    
    //console.log(email, password);
    register();
    firebaseInit();
  }
  );
});

//Login with google
document.getElementById('iniciaGoogle').addEventListener('click', (e) => {
  e.preventDefault();
  authGoogle();
});

document.getElementById('buttoninicia').addEventListener('click', (e) => {
  e.preventDefault();
 iniciaSesion();
});

firebaseInit();

