
// Este es el punto de entrada de tu aplicacion
//import {register, getAuth} from './lib/register.js';
import formulario from './lib/login.js';
import { initFirebase } from './lib/firebase.js';
// Al crear esta función la colocaremos arriba, al lado de initFirebase
// import { initRouter } from './lib/firebase.js';


document.getElementById('root').appendChild(formulario());

const init = () => {
    console.log('holi');
    initFirebase();
    

//     initRouter(); Aquí llamamos a la función de enrutamiento
};
window.addEventListener('load', init);