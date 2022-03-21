//import { AsyncIterator } from "regenerator-runtime";editJoke
/*import { muroBazinga, deleteJoke,  } from "../lib/compilacion.js";

export const feedJokes = async () => {
    const muroBa = await muroBazinga();
    let feedContainer = document.querySelector("#muroBazingaa");
    console.log(feedContainer);
    feedContainer.innerHTML = '';
    muroBa.forEach((info) => {
         feedContainer.innerHTML += `
            <div class='post'>
            <p><b>${info.userName}</b></p>
            <h3>${info.title}</h3>
            <p>${info.description}</p>
             </div>
            <div>
            <button class='btn-delete' value='${info.id}'>Eliminar</button>
            <button class='btn-edit' value='${info.id}'>Editar</button>          
           
            </div>
          `

       })

        const btnsDelete = feedContainer.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', async () => {
                console.log(btn.value);
                await deleteJoke(btn.value);
                await feedJokes();
            })
        })
*/

    //queda muy pendiente
  /*       const btnEdit = feedContainer.querySelectorAll('.btn-edit');
      btnEdit.forEach(edit => {
        edit.addEventListener('click', Async () => {
console.log(edit.value);
const  = await getPost(e.target.dataset.id)
          console.log(doc)
          const task = doc.data();
          console.log(task)
       documen.querySelector('#title').value = .title;
       document.querySelector('#description').value = task.description;
          
          editStatus = true; 
          id = e.target.dataset.id;
          postBtn.innerText = 'Actualizar'

          
          });
        
        })






         
        });
      });
    
}
 /*
          const valueButton = info.value;
          const editDocReview = containerEmpty.querySelector(`#writePost-${valueButton}`);
          editDocReview.removeAttribute('readonly');
          const saveValue = containerEmpty.querySelector(
            `#mr-${element.value}-save`,
          );
          saveValue.style.display = 'block';
          saveValue.addEventListener('click', () => {
    
            const description = editDocReview.value;
            editPost(element.value, description);
            saveValue.style.display = 'none';
    
            editDocReview.setAttribute('readonly');
          });*/
        