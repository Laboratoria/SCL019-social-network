import { register, googleAuth } from "../../lib/regFirebase.js";
import {
  compare,
  validateReg,
  showPassword,
  showPassword2,
} from "../helpers/validate.js";

const formulario = () => {
  const content = document.createElement("div");
  content.className = "content";

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.textContent = "Kitter";
  content.appendChild(logo);

  const box = document.createElement("div");
  box.className = "box";
  content.appendChild(box);

  const boxTitle = document.createElement("div");
  boxTitle.className = "boxTitle";
  box.appendChild(boxTitle);

  const title = document.createElement("p");
  title.className = "title";
  title.textContent = "Crea una cuenta";
  boxTitle.appendChild(title);

  const form = document.createElement("form");
  form.className = "form";
  box.appendChild(form);

  const warning = document.createElement("div");
  warning.id = "warning";
  warning.className = "warning";
  form.appendChild(warning);

  const email = document.createElement("input");
  email.className = "input";
  email.id = "email";
  email.placeholder = "Correo electrónico";
  form.appendChild(email);

  const warning2 = document.createElement("div");
  warning2.id = "warning2";
  form.appendChild(warning2);

  const password = document.createElement("input");
  password.className = "input";
  password.id = "password";
  password.placeholder = "Contraseña de 6 caracteres";
  password.type = "password";
  password.maxLength = "6";
  form.appendChild(password);

  const eye = document.createElement("img");
  eye.className = "eye";
  eye.src = "./img/eye.png";
  form.appendChild(eye);
  eye.addEventListener("click", showPassword);    
  eye.addEventListener("click", showPassword2);

  const confPassword = document.createElement("input");
  confPassword.className = "input";
  confPassword.id = "confPassword";
  confPassword.placeholder = "Confirmar contraseña";
  confPassword.type = "password";
  confPassword.maxLength = "6";
  form.appendChild(confPassword);

  const warning3 = document.createElement("div");
  warning3.id = "warning3";
  form.appendChild(warning3);

  const btnCrear = document.createElement("button");
  btnCrear.className = "btn";
  btnCrear.id = "btnCrear";
  btnCrear.textContent = "Crear cuenta";
  form.appendChild(btnCrear);

  btnCrear.addEventListener("click", register);

  btnCrear.addEventListener("click", (event) => {
    event.preventDefault();
    const message = `<p class="campos">Hay campos vacíos</p>`;
    const mail = email.value;
    const pass = password.value;
    const conf = confPassword.value;
    const valid = validateReg(mail, pass, conf);
    const comp = compare(pass, conf);

    if (valid === false) {
      warning.innerHTML = message;
    }
    if (comp === false) {
        warning2.innerHTML = "<img src = './assets/img/x.png'>";
      } else {
        warning2.innerHTML = "<img src = './assets/img/ticket.png'>";
      }
    });
  
 
    

  const btnGoogle = document.createElement("button");
  btnGoogle.className = "btn";
  btnGoogle.textContent = "Ingresar con Google";
  form.appendChild(btnGoogle);
  btnGoogle.addEventListener("click", googleAuth);

  const registeredUser = document.createElement("p");
  registeredUser.textContent = "¿Ya tienes una cuenta?";
  registeredUser.className = "registrado";
  form.appendChild(registeredUser);

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

export default formulario;
