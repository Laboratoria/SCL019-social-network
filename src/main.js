
// Este es el punto de entrada de tu aplicacion
import formulario from './components/login.js';
import { initFirebase } from './lib/firebase.js';
// Al crear esta función la colocaremos arriba, al lado de initFirebase
// import { initRouter } from './lib/firebase.js';


document.getElementById('root').appendChild(formulario());

const init = () => {
    initFirebase();
//     initRouter(); Aquí llamamos a la función de enrutamiento
};
window.addEventListener('load', init);