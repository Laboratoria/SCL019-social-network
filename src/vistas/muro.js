import { observer, signingOut, guardarPost, muroBazinga } from "../lib/compilacion.js";

export const firstscreen = () => {
    const muro = document.createElement("div");
    muro.className = 'muropost';
    muro.innerHTML = `
 <div class= "muro-grid">
     <header class= "element-1">
         <a href="" class='url'>Usuario</a> <img class='' src=""/>
       </header>
       <img src= "images/logo-1.png" alt="Bazinga_Speech_Bubble" id="logo" class="element-2">
      <div class= 'posts-main'>
      <form>
       <textarea class= "textareaT" name="title" id="title" rows='6' cols='38' placeholder="Nombre o Título" ></textarea>
       <textarea class="textareaD" name="description" id="description" rows='50' cols='38' placeholder= "Escribe aquí tu Broma" ></textarea>
       <button type="submit" class="enviarMsj" id="enviarMsj">Postear</button>
       </form>
     </div>
    <div id = "muroBazinga" class= "containerpost">
    </div>
      <button type="submit" class="salir" id="signOut">Cerrar Sesión</button>
 </div>
     `;

    muro.querySelector('#signOut').addEventListener('click', (e) => {
        e.preventDefault();
        signingOut();
        window.location.hash = '#/welcome';
    });

    const btnSendPost = muro.querySelector('#enviarMsj');

    btnSendPost.addEventListener('click', (e) => {
        e.preventDefault();
        const title = muro.querySelector('#title').value;
        const description = muro.querySelector('#description').value;
        guardarPost(title, description);
        muroBazinga();

        //btnSendPost.reset()
    }
    );

    observer();

    return muro;
}