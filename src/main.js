import { changeRouter } from "./lib/index.js";
import { firebaseInit } from "./lib/compilacion.js";


window.location.hash = '#/welcome';
window.addEventListener('hashchange', () => {
  
  changeRouter(window.location.hash);
});
window.addEventListener('load', () => {
  changeRouter(window.location.hash);
});



firebaseInit();

