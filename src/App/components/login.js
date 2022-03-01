import { register, googleAuth } from "../../lib/regFirebase.js";
import { login } from "../../lib/logFirebase.js";
import {
  showPassword,
} from "../helpers/validate.js";
    
    export const ingresar = () => {
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
        title.textContent = "Ingresar";
        boxTitle.appendChild(title);

        const form = document.createElement("form");
        form.className = "form";
        box.appendChild(form);

        const email = document.createElement("input");
        email.className = "input";
        email.id = "emailLogin";
        email.placeholder = "Correo electrónico";
        form.appendChild(email);

        const eye2 = document.createElement("img");
        eye2.className = "eye2";
        eye2.src = "./assets/img/eye.png";
        form.appendChild(eye2);
        eye2.addEventListener("click", showPassword);
        
        const password = document.createElement("input");
        password.className = "input";
        password.id = "password";
        password.placeholder = "Contraseña de 6 caracteres";
        password.type = "password";
        password.maxLength = "6";
        form.appendChild(password);

        

        const btnLogin = document.createElement("button");
        btnLogin.className = "btn";
        btnLogin.id = "btnCrear";
        btnLogin.textContent = "Ingresar";
        form.appendChild(btnLogin);

        btnLogin.addEventListener('click', login)

        const btnCreateAccount = document.createElement("a");
        btnCreateAccount.className = "a";
        btnCreateAccount.id = "btnCrear";
        btnCreateAccount.textContent = "Crear cuenta";
        btnCreateAccount.setAttribute('href', '#/formulario');
        form.appendChild(btnCreateAccount);

        const btnGoogle = document.createElement("button");
        btnGoogle.className = "btn";
        btnGoogle.textContent = "Ingresar con Google";
        form.appendChild(btnGoogle);
        btnGoogle.addEventListener("click", googleAuth);

        const googleIco = document.createElement('img');
        googleIco.className = 'icono';
        googleIco.src = "./assets/img/google.png";
        btnGoogle.appendChild(googleIco);

        return content;
    }
