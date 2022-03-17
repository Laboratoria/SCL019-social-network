import { signOut } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import {
  collection,
  addDoc, getDocs
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


export const getPost = async (db) => {
  const cont = document.getElementById('content');
  const querySnapshot = await getDocs(collection(db, "publicaciones"));
  cont.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().email}`)
cont.innerHTML +=


`${doc.data().email} ${doc.data().publicacion}`


    
  });
};
