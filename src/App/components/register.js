import { register, googleAuth } from '../../lib/regFirebase.js';
import {
  compare,
  validateReg,
  showPassword,
  showPassword2,
  // compLength,
} from '../helpers/validate.js';
//pruebas 
// import { showView } from '../router.js';
// import { login } from './login.js';

export const formulario = (autenticacion) => {
  const content = document.createElement('div');
  content.className = 'content';

  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.textContent = 'Kitter';
  content.appendChild(logo);

  const box = document.createElement('div');
  box.className = 'box';
  content.appendChild(box);

  const boxTitle = document.createElement('div');
  boxTitle.className = 'boxTitle';
  box.appendChild(boxTitle);

  const title = document.createElement('p');
  title.className = 'title';
  title.textContent = 'Regístrate';
  boxTitle.appendChild(title);

  const form = document.createElement('form');
  form.className = 'form';
  box.appendChild(form);

  const email = document.createElement('input');
  email.className = 'input';
  email.id = 'email';
  email.placeholder = 'Correo electrónico';
  form.appendChild(email);

  const password = document.createElement('input');
  password.className = 'input';
  password.id = 'password1';
  password.placeholder = 'Contraseña de 6 caracteres';
  password.type = 'password';
  password.maxLength = '6';
  form.appendChild(password);

  const confPassword = document.createElement('input');
  confPassword.className = 'input';
  confPassword.id = 'confPassword';
  confPassword.placeholder = 'Confirmar contraseña';
  confPassword.type = 'password';
  confPassword.maxLength = '6';
  form.appendChild(confPassword);

  const warning = document.createElement('div');
  warning.className = 'warning';
  warning.id = 'warning';
  form.appendChild(warning);

  const warning2 = document.createElement('div');
  warning2.className = 'warning';
  warning2.id = 'warning2';
  form.appendChild(warning2);

  const warning3 = document.createElement('div');
  warning3.className = 'warning';
  warning3.id = 'warning3';
  form.appendChild(warning3);

  const eye = document.createElement('img');
  eye.className = 'eye';
  eye.src = './assets/img/eye.png';
  form.appendChild(eye);
  eye.addEventListener('click', showPassword);    
  eye.addEventListener('click', showPassword2);

 

  const btnCrear = document.createElement('button');
  btnCrear.className = 'btn';
  btnCrear.id = 'btnCrear';
  btnCrear.textContent = 'Crear cuenta';
  form.appendChild(btnCrear);

  
  btnCrear.addEventListener('click', (event) => {
    event.preventDefault();
    const message = `<p class='campos'>Hay campos vacíos</p>`;
    const message2 = `<div class='noConincidence'>
    <img src = './assets/img/cryCat.png' class='cry'>
    <p class='x'>Las contraseñas no coinciden</p>
    </div>`
    const message3 = `<div class='noConincidence'>
    <img src = './assets/img/happyCat.png' class='cry'>
    <p class='x'>Registro exitoso. Revisa tu email</p>
    </div>`
    const mail = email.value;
    const pass = password.value;
    const conf = confPassword.value;
    const valid = validateReg(mail, pass, conf);
    const comp = compare(pass, conf);
    // const complete = compLength(pass, conf);

    // if (valid === false) {
    //   warning.innerHTML = message;
    // }

    if (comp === true){
      password.setAttribute('id', 'password');
    }
    else {
      warning.innerHTML = message2;
    }
    // if (comp === false && valid === true) {
    //     warning2.innerHTML = message2;
    //     warning.style.display = 'none';

    //   } else if (comp === true && valid === true && complete == true) {
    //     warning2.innerHTML = message3;
    //   }
    });

  btnCrear.addEventListener('click', (e) => register(e, autenticacion));   

  const btnGoogle = document.createElement('button');
  btnGoogle.className = 'btn'
  btnGoogle.textContent = 'Registrarse con Google';
  form.appendChild(btnGoogle);
  btnGoogle.classList.add = 'btnGoogle'
  btnGoogle.addEventListener('click', (e) => googleAuth(e, autenticacion));

  const googleIco = document.createElement('img');
  googleIco.className = 'icono';
  googleIco.src = './assets/img/google.png';
  btnGoogle.appendChild(googleIco);

  const registeredUser = document.createElement('a');
  registeredUser.textContent = '¿Ya tienes una cuenta?';
  registeredUser.className = 'a';
  registeredUser.setAttribute('href', '#/login');
  form.appendChild(registeredUser);
  // registeredUser.addEventListener('click', showView('#/login'));

  // const mode = document.createElement('div');
  // mode.className = 'mode';
  // mode.textContent = 'Cambiar a modo noturno';
  // content.appendChild(mode);

  // const btnMode = document.createElement ('input');
  // btnMode.className = 'btnMode';
  // btnMode.type = 'range';
  // btnMode.min = '1';
  // btnMode.max = '2';
  // btnMode.setAttribute('value', 1)
  // content.appendChild(btnMode);
  return content;
};

// export default formulario;
