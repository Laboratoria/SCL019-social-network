import { firebaseInit, authGoogle, register} from "../lib/compilacion.js";

export const signUp = () => {
    const sectSignUp = document.createElement("section");
    sectSignUp.className = 'signUp-container';
  sectSignUp.innerHTML = `
  <form id ="form-SignUp" class="form-SignUp">
     <h1>Regístrate</h1>
    
     <input type="text" placeholder="Usuario" id="user" required>
     <br>
     <input type="email" placeholder="correo electrónico" id="Email" required>
     <br>
     <input type="password" placeholder="Contraseña" id="password" required>
     <br>
     <input type="password" placeholder="Contraseña" id="password1" required>
   <br>
  <button type="button" class="primary"  id="button-SignUp">Regístrate</button>
  <button type="submit" class= "primary2" id="iniciaGoogle">Ingresa con Google</button>
  </form>
  `;

 sectSignUp.querySelector('#iniciaGoogle').addEventListener('click', (e) => {
    e.preventDefault();
    authGoogle();
  });

  sectSignUp.querySelector('#button-SignUp').addEventListener('click', () => {
    const email = sectSignUp.querySelector('#Email').value;
    const password = sectSignUp.querySelector('#password').value;
    console.log(email);
  register(email, password);
  });
  firebaseInit();

  return sectSignUp;
  
  };


 
  
    
 
  
