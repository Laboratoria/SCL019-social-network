import {signingOut, guardarPost, getTasks, muroBazinga, deleteJoke} from "../lib/compilacion.js";
// observer ,
export const firstscreen = async () => {
    const muro = document.createElement("div");
    muro.className = 'muropost';
    muro.innerHTML = `
 <div class= "muro-grid">
     <header class= "element-1"> 
     </header>
       <img src= "images/logo-1.png" alt="Bazinga_Speech_Bubble" id="logo" class="element-2">
      <div class= 'posts-main'>
      <form id= form-Post>
       <textarea class= "textareaT" name="title" id="title" rows='6' cols='38' placeholder="Nombre o Título" ></textarea>
       <textarea class="textareaD" name="description" id="description" rows='50' cols='38' placeholder= "Escribe aquí tu Broma" ></textarea>
       <button type="submit" class="enviarMsj" id="enviarMsj">Postear</button>
       </form>
     </div>
    <div id = "muroBazingaa" class= "containerpost"></div>
      <button type="submit" class="salir" id="signOut">Cerrar Sesión</button>
 </div>
     `;

    const btnSendPost = muro.querySelector('#enviarMsj');

    btnSendPost.addEventListener('click', async (e) => {
        e.preventDefault();
        const form = muro.querySelector('#form-Post');
        const title = muro.querySelector('#title').value;
        const description = muro.querySelector('#description').value;
        guardarPost(title, description);
        // observer();
        getTasks();
        form.reset();
        const muroBa = await muroBazinga();
        const feedContainer = muro.querySelector('#muroBazingaa');
        console.log(feedContainer);
        feedContainer.innerHTML = '';
        muroBa.forEach((info) => {

            feedContainer.innerHTML += `
          <div> 
          <h3>${
                info.title
            }</h3>
          <p>${
                info.description
            }</p>
          <button class='btn-delete' data-id='${
                info.id
            }'>Eliminar</button>
          </div>
          `
        })
    });

    const muroBa = await muroBazinga();
    console.log(muroBa);

    const feedContainer = muro.querySelector('#muroBazingaa');
    console.log(feedContainer);
    muroBa.forEach((info) => {

        feedContainer.innerHTML += `
            <div> 
            <h3>${
            info.title
        }</h3>
            <p>${
            info.description
        }</p>
            <button class='btn-delete' value='${
            info.id
        }'>Eliminar</button>
            </div>
            `
    })

    const btnsDelete = feedContainer.querySelectorAll('.btn-delete');
    btnsDelete.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log(btn)
            deleteJoke(btn.value);
        })
    })

    muro.querySelector('#signOut').addEventListener('click', (e) => {
        e.preventDefault();
        signingOut();
        window.location.hash = '#/welcome';
    });

    return muro;
}
