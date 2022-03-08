import { firebaseInit, authGoogle, register} from "../lib/compilacion.js";

export const signUp = () => {
    const sectSignUp = document.createElement("section");
    sectSignUp.className = 'signInMain';
  sectSignUp.innerHTML = `
  <div class = 'signIn-container gridContainer'>
  <img src= "images/logo-1.png" alt="Bazinga_Speech_Bubble" id="logo" class= "logo col-12">
  <form id ="form-SignUp" class="form-registrar col-12">
     <Stack gap={3}>
   
     <h1>Regístrate</h1>
     <input type="text" placeholder="Nombre de Usuario" id="user" required>
     <input type="email" placeholder="Correo electrónico" id="Email" required>
     <input type="password" placeholder="Contraseña" id="password" required>
     <input type="password" placeholder="Contraseña" id="password1" required>

  <button type="button" class="primary"  id="button-SignUp">Regístrate</button>
  <button type="submit" class= "primary2" id="iniciaGoogle">Ingresa con Google</button>
  </Stack>
  </form>
  </div>
  `;

 sectSignUp.querySelector('#iniciaGoogle').addEventListener('click', (e) => {
    e.preventDefault();
    authGoogle();
   
  });

  sectSignUp.querySelector('#button-SignUp').addEventListener('click', () => {
    const email = sectSignUp.querySelector('#Email').value;
    const password = sectSignUp.querySelector('#password').value;
    //const name = sectSignUp.querySelector('#user').value;
    console.log(email);
  register(email, password);
   
  });
  firebaseInit();

  return sectSignUp;
  
  };


 
  
    
 
  
