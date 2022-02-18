import {register, googleAuth} from './register.js'
import { validateReg } from './validate.js';

const formulario = () => {
    const content = document.createElement('div');
    content.className = 'content';

    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.textContent = 'Kitter'
    content.appendChild(logo);

    const box = document.createElement('div');
    box.className = 'box';
    content.appendChild(box);
    
    const boxTitle = document.createElement('div');
    boxTitle.className = 'boxTitle';
    boxTitle.textContent = 'Crea una cuenta';
    box.appendChild(boxTitle);

    const form = document.createElement('form');
    form.className = 'form';
    content.appendChild(form);

    const warning = document.createElement('div');
    warning.id = 'warning';
    form.appendChild(warning);

     
    const email = document.createElement ('input')
    email.className = 'input';
    email.id = 'email';
    email.placeholder = 'Correo electrónico';
    form.appendChild(email);
    
    const password = document.createElement ('input')
    password.className = 'input';
    password.id = 'password';
    password.placeholder = 'Contraseña de 6 caracteres';
    password.type = 'password';
    password.maxLength = "6";
    form.appendChild(password);

    const confPassword = document.createElement ('input');
    confPassword.className = 'input';
    confPassword.id = 'confPassword';
    confPassword.placeholder = 'Confirmar contraseña';
    confPassword.type = 'password';
    confPassword.maxLength = "6";
    form.appendChild(confPassword);

    const ticket = document.createElement('div');
    ticket.id = 'ticket'
    form.appendChild(ticket);

    const comparar = () => {
    if(password.value === confPassword.value){
        //Si son iguales
        console.log("Las contraseñas son iguales");
    }else{
        alert("Las contraseñas no coinciden");
    }
};
    

    const btnCrear = document.createElement ('button');
    btnCrear.className = 'btn';
    btnCrear.id = ('btnCrear');
    btnCrear.textContent = 'Crear cuenta';
    form.appendChild(btnCrear);
    btnCrear.addEventListener('click', register);
    btnCrear.addEventListener('click', (event) => {
        event.preventDefault();
        const mail = email.value;
        const pass = password.value;
        const conf = confPassword.value;
        const valid = validateReg(mail, pass, conf);
       if(valid === false){
       
       warning.innerHTML= 'Oe completa los campoh';
   }
});
    //Aca se llama la funcion de firebase

    const btnGoogle = document.createElement ('button');
    btnGoogle.className = 'btn';
    btnGoogle.textContent = 'Ingresar con Google';
    form.appendChild(btnGoogle);
    btnGoogle.addEventListener('click', googleAuth);
    btnGoogle.addEventListener('click', comparar);
    

    const registeredUser = document.createElement ('p');
    registeredUser.textContent = '¿Ya tienes una cuenta?';
    registeredUser.className = 'registrado';
    form.appendChild(registeredUser);

    const btnMode = document.createElement ('input');
    btnMode.className = 'btnMode';
    btnMode.type = 'range';
    btnMode.min = '1';
    btnMode.max = '2';
    btnMode.setAttribute('value', 1)
    content.appendChild(btnMode);

    return content
}


export default formulario;