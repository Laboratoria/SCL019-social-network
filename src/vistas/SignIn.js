
import {authGoogle, iniciaSesion} from "../lib/compilacion.js";

export const signIn = () => {
    const sectSignIn = document.createElement("section");
    sectSignIn.className = 'signInMain';
    sectSignIn.innerHTML = `
    <div class = 'signIn-container gridContainer'>
    <img src= "images/logo-1.png" alt="Bazinga_Speech_Bubble" id="logo" class= "logo col-12">
    <form id = "form-IniciaSe" class="form-IniciaSe col-12"> 
    <Stack gap={3}>
     <h1>Inicia Sesión</h1>
    <input type="email" placeholder="Correo Electrónico" id="ingresaEmail" >
    <input type="password"  placeholder="Contraseña" id="ingresaContrasena" >
  <button type="submit" class="primary" id="buttoninicia">¿Ya tienes cuenta? Inicia Sesión</button>
  <button type="submit" class="primary"  id="buttonRegistrar">¿No tienes cuenta? Regístrate</button>
      <button type="submit" class= "primary2" id="iniciaGoogle">Ingresa con Google</button>
 </Stack>
  </form>
  </div>
  `;

    sectSignIn.querySelector('#buttonRegistrar').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#/registrar';
    });

    sectSignIn.querySelector('#iniciaGoogle').addEventListener('click', (e) => {
        e.preventDefault();
       authGoogle()
         
      });

    sectSignIn.querySelector('#buttoninicia').addEventListener('click', (e) => {
        e.preventDefault();
        const email = sectSignIn.querySelector('#ingresaEmail').value;
        const password = sectSignIn.querySelector('#ingresaContrasena').value;
        console.log(email);
        iniciaSesion(email,password)
        
    }); 

    return sectSignIn;
}
