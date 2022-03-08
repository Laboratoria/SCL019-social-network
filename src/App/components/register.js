import { register, googleAuth } from '../../lib/regFirebase.js';
import {
  emptyInput,
  comparePassword,
  showPassword,
  showPassword2,
  showPassword3,
} from '../helpers/validate.js';


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
  confPassword.className = 'input2';
  confPassword.id = 'confPassword';
  confPassword.placeholder = 'Confirmar contraseña';
  confPassword.type = 'password';
  confPassword.maxLength = '6';
  form.appendChild(confPassword);

  const warning = document.createElement('div');
  warning.className = 'warning';
  warning.id = 'warning';
  form.appendChild(warning);

  const eye = document.createElement('img');
  eye.className = 'eye';
  eye.src = './assets/img/eye.png';
  form.appendChild(eye);
  eye.addEventListener('click', showPassword);
  eye.addEventListener('click', showPassword2);
  eye.addEventListener('click', showPassword3);


  const btnCrear = document.createElement('button');
  btnCrear.className = 'btn';
  btnCrear.id = 'btnCrear';
  btnCrear.textContent = 'Crear cuenta';
  form.appendChild(btnCrear);


  btnCrear.addEventListener('click', (event) => {
    event.preventDefault();
    const message = `<p class='campos'>Hay campos vacíos</p>`;
    const message2 = `<p class='campos'>Las contraseñas no coinciden</p>
    <img src = './assets/img/cryCat.png' class='cry'>`

    const mail = email.value;
    const pass = password.value;
    const conf = confPassword.value;
    const emptyInputV = emptyInput(mail, pass, conf);
    const comparePasswordV = comparePassword(pass, conf);

    if (emptyInputV === true) {
      warning.innerHTML = message;
    }
    if (comparePasswordV === false) {
      password.setAttribute('id', 'password');
    }
    else {
      warning.innerHTML = message2;
    }

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
