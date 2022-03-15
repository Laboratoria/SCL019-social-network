import { logOut } from "../../lib/homeFirebase.js";

export const home = (autenticacion) => {
  const homeCont = document.createElement('div');
  homeCont.className = 'homeCont';

  const homeHead = document.createElement('div');
  homeHead.className = 'homeHead';
  homeCont.appendChild(homeHead);

  const homeLogo = document.createElement('div');
  homeLogo.className = 'logo';
  homeLogo.textContent = 'Kitter';
  homeHead.appendChild(homeLogo);

  const homeLogout = document.createElement('button');
  homeLogout.className = 'logout';
  homeHead.appendChild(homeLogout);
  homeLogout.addEventListener('click', (e) => {
    logOut(e, autenticacion)
    e.preventDefault();
    window.location.hash = '#/login';
  });

  const contPost = document.createElement ('div');
  contPost.className = 'contPost';
  homeCont.appendChild(contPost);

  const userProfile = document.createElement('div');
  userProfile.className = 'userProfile';
  contPost.appendChild(userProfile);

  const inputPost = document.createElement('input');
  inputPost.className = 'post';
  inputPost.placeholder = ' Escribe tu publicación'
  contPost.appendChild(inputPost);


  const arrowPost = document.createElement('div');
  arrowPost.className = 'arrowPost';
  contPost.appendChild(arrowPost);

  const anuncio = document.createElement('div');
  anuncio.className = 'anuncio';
  contPost.appendChild(anuncio);

  const avisoTexto = document.createElement('p');
  avisoTexto.className = 'avisoTexto';
  avisoTexto.textContent = 'Pagina en construcción';
  anuncio.appendChild(avisoTexto);

  const aviso = document.createElement('img');
  aviso.className = 'aviso';
  aviso.src = './assets/img/working-pusheen.gif';
  anuncio.appendChild(aviso);


  return homeCont;

};
