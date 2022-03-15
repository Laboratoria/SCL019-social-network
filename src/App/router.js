import { formulario } from './components/register.js';
import { home } from './components/home.js';
import { ingresar } from './components/login.js';

const showView = (routers, autenticacion) => {
  const router = routers.substr(2, routers.length - 2);
  const root = document.getElementById('root');

  root.innerHTML = '';
  switch (router) {
    case 'formulario':
      root.appendChild(formulario(autenticacion));
      break;
    case 'login':
      root.appendChild(ingresar(autenticacion));
      break;
    case 'home':
      root.appendChild(home(autenticacion));
      break;
    default:
      root.appendChild(formulario(autenticacion));
      break;
  }
};

export const changeView = (hash, autenticacion) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return showView('#/login', autenticacion);
  } if (hash === '#/formulario' || hash === '#/login' || hash === '#/home') {
    return showView(hash, autenticacion);
  }
  return showView('#/login', autenticacion);
};

export const initRouter = (autenticacion) => {
  window.addEventListener('load', changeView(window.location.hash, autenticacion));
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash, autenticacion);
  });
};
