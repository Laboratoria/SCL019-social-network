// Este es el punto de entrada de tu aplicacion
// import {register, getAuth} from './lib/register.js';
import { initFirebase } from '../lib/firebase.js';
import { initRouter } from './router.js';
// import {formulario} from './components/register.js';
// import home from './components/home.js';
// import login from './components/login.js';

// document.getElementById('root').appendChild(formulario());
// document.getElementById('root').appendChild(home);
// document.getElementById('root').appendChild(login);

const init = () => {
  const autenticacion = initFirebase();
  initRouter(autenticacion);
};

window.addEventListener('load', init());
