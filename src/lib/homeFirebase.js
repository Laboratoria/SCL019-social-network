import {signOut} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

export const logOut = (e, autenticacion) => {
    e.preventDefault();
    signOut(autenticacion).then(() => {
        console.log('Usuario cerró sesión');
    }).catch((error) => {
        console.log('no se pudo cerrar sesión')
    });
}
export const post = async (db) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
