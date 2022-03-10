import {signingOut} from "../lib/compilacion.js";

 export const firstscreen = () => {
     const muro = document.createElement("div");
     muro.className='muropost grid';
     muro.innerHTML= `
     
     <header>
     <a href="" class='url'>Usuario</a> <img class='' src=""/>
     </header>
     <div class= "contenedor-muro">
     <img src= "images/logo-1.png" alt="Bazinga_Speech_Bubble" id="logo" class="logo">
     <h1> Hola Bienvenido a Bazinga!</h1>
     
     <main class= 'posts-main'>
     <section id='post'></section>
     </main>
     </div>
     <footer>
     <div class='footer'>
     <button type="submit" class="salir" id="signOut">Cerrar Sesión</button>
     <a href=" " class= 'url'>Nuevo Posteo</a> <img class='icon-post' src=""/>
     </div>
     </footer>
     `;


     muro.querySelector('#signOut').addEventListener('click', (e) => {
        e.preventDefault();
        signingOut();
        window.location.hash = '#/welcome';
    });

     return muro;
 }