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
  

  return homeCont;

};
