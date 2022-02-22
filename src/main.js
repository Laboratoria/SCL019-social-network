
// Este es el punto de entrada de tu aplicacion
//import {register, getAuth} from './lib/register.js';
import formulario from './lib/register.js';
import { initFirebase } from './lib/firebase.js';
import home from './lib/home.js';
import login from './lib/login.js';
// Al crear esta función la colocaremos arriba, al lado de initFirebase
// import { initRouter } from './lib/firebase.js';


document.getElementById('root').appendChild(formulario);
document.getElementById('root').appendChild(home);
document.getElementById('root').appendChild(login);

const init = () => {
      initFirebase();

//     initRouter(); Aquí llamamos a la función de enrutamiento
};
window.addEventListener('load', init);