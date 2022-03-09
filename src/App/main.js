import { initFirebase } from '../lib/firebase.js';
import { initRouter } from './router.js';


const init = () => {
  const autenticacion = initFirebase();
  initRouter(autenticacion);
};

window.addEventListener('load', init());
