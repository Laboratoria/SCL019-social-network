import { signOut } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import {
    collection,
    addDoc, 
    getDocs,
    onSnapshot,
    orderBy
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

export const logOut = (autenticacion) => {
    signOut(autenticacion)
        .then(() => {
            console.log("Usuario cerró sesión");
        })
        .catch((error) => {
            console.log("no se pudo cerrar sesión");
        });
};

export const post = async (db, autenticacion) => {
    let publicar = document.getElementById("post").value;
    const user = autenticacion.currentUser;
    const email = user.email;
    try {
        const docRef = await addDoc(collection(db, "publicaciones"), {
            publicacion: publicar,
            email: email,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};


export const getPost = (db) => {
    onSnapshot(collection(db, "publicaciones"), (querySnapshot) =>{
        const cont = document.getElementById('content');
        cont.innerHTML = '';

        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().email}`)
            // cont.innerHTML +=
            const nameUser = document.createElement('div')
            nameUser.className = 'nameUser';
            nameUser.textContent = doc.data().email;
            cont.appendChild(nameUser);
          
            const posteo = document.createElement('div')
            posteo.className = 'posteo';
            posteo.textContent = doc.data().publicacion;
            cont.appendChild(posteo);
            
        });
    })
  };
// para ordenar pero no funcinó
//   orderBy('datePosted', 'desc')