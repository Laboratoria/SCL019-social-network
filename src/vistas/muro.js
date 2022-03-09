import {signingOut} from "../lib/compilacion.js";

 export const firstscreen = () => {
     const muro = document.createElement("div");
     muro.className='muropost';
     muro.innerHTML= `
     <div class= "contenedor-muro">
     <img src= "images/logo-1.png" alt="Bazinga_Speech_Bubble" id="logo" class= "logo">
     <h1> Hola Bienvenido a Bazinga!</h1>
     <button type="submit" class="primary" id="signOut">Cerrar Sesión</button>
     </div>`;


     muro.querySelector('#signOut').addEventListener('click', (e) => {
        e.preventDefault();
        signingOut();
        window.location.hash = '#/welcome';
    });

     return muro;
 }