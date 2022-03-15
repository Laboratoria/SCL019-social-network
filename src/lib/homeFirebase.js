import { signOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';

export const logOut = (e, autenticacion) => {
    e.preventDefault();
    signOut(autenticacion).then(() => {
        console.log('Usuario cerró sesión');
    }).catch((error) => {
        console.log('no se pudo cerrar sesión')
    });
}
// ------Permite verificar si hay un usuario conectado
// export const verification = () => {
//     onAuthStateChanged(autenticacion, (user) => {
//         if (user) {
//             currentUser = user;
//             console.log('usuario Logeado', currentUser.displayName);
//             const uid = user.uid;
//             return currentUser;
//         } else {
//             console.log('No hay Usuario logueado');
//             // User is signed out      
//             // ...    
//         }
//     });
// }