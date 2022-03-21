import {signingOut, guardarPost, getTasks, muroBazinga, deleteJoke, editJoke, getPost, auth, observer} from "../lib/compilacion.js";

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
  
     let editStatus=false;
     let yep= '';

     const feedJokes = async () => {
      const muroBa = await muroBazinga();
      const feedContainer = muro.querySelector("#muroBazingaa");
      console.log(feedContainer);
      feedContainer.innerHTML = '';
      muroBa.forEach((info) => {
        console.log(info.userName, "infoid");
        console.log(auth.currentUser.uid, "uid");
           feedContainer.innerHTML += `
              <div class='post'> 
              <div class='post1'> 
              <form class= 'feed'>
              <h3 id = "uno">${info.title}</h3> 
              <em id ="cero">${info.userName}</em><br>
              <b id="dos">${info.description}</b>
            </form>
            </div>
        </div> `
        if(info.userId === auth.currentUser.uid){
      
          feedContainer.innerHTML +=

          `   <div class= "bottonesmuro">
              <button class='btn-delete' value='${info.id}'>Eliminar</button>
              <button class='btn-edit' value='${info.id}'>Editar</button>        
              </div> 
            ` }
  ;
          })
         
          const btnsDelete = feedContainer.querySelectorAll('.btn-delete');
          btnsDelete.forEach(btn => {
              btn.addEventListener('click', async () => {
                  //console.log(btn.value);
                  await deleteJoke(btn.value);
                  await feedJokes();
              })
          })


// editar post!
       const btnEdit = feedContainer.querySelectorAll('.btn-edit');
      btnEdit.forEach(edit => {
        edit.addEventListener('click', async(e) => {
         const doc= await getPost(edit.value);
         //console.log(doc);
         const task = doc.data();
        // console.log(task);

         muro.querySelector('#title').value = task.title
         muro.querySelector('#description').value = task.description

         editStatus=true;
         yep = doc.id;

      muro.querySelector('#enviarMsj').innerText= "Actualizar"


        })
      });
        
        }
        

    const btnSendPost = muro.querySelector('#enviarMsj');

    btnSendPost.addEventListener('click', async (e) => {
        e.preventDefault();
        const form = muro.querySelector('#form-Post');
        const title = muro.querySelector('#title').value;
        const description = muro.querySelector('#description').value;
        
        if (!editStatus){
          guardarPost (title, description,)
        }else{
         editJoke(yep, {
           userId,
           title,
            description,
         });
        }
        editStatus=false;
        
        form.reset();
        
        getTasks();
        
        await feedJokes();
        
    });

    await feedJokes();

    muro.querySelector('#signOut').addEventListener('click', (e) => {
      e.preventDefault();
      signingOut();
      window.location.hash = '#/welcome'; 
      location.reload();
    });

    
    return muro;

}

