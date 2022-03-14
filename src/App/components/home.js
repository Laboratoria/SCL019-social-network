// import { salir } from "../../lib/logFirebase";

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
  // homeLogout.addEventListener('click', (e) => salir(e, autenticacion));
 homeLogout.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/login';
});
  

  const formWall = document.createElement('form');
  formWall.className = 'wall';
  homeCont.appendChild(formWall);

  const inputWall = document.createElement('input');
  inputWall.className = 'inputWall';
  formWall.appendChild(inputWall);

  const anuncio = document.createElement('div');
  anuncio.className = 'anuncio';
  homeCont.appendChild(anuncio);

  const avisoTexto = document.createElement('p');
  avisoTexto.className = 'avisoTexto';
  avisoTexto.textContent = 'Pagina en construcción';
  anuncio.appendChild(avisoTexto);

  const aviso = document.createElement('img');
  aviso.className = 'aviso';
  aviso.src = './assets/img/working-pusheen.gif';
  anuncio.appendChild(aviso);


  const btnPost = document.createElement('button');
  btnPost.className = 'btnPost';
  formWall.appendChild(btnPost);
  

  return homeCont;

};
