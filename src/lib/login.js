import {register, googleAuth} from './register.js'

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

    const username = document.createElement ('input')
    username.className = 'input';
    username.id = 'username';
    username.placeholder = 'Nombre de usuario'
    form.appendChild(username);

    const email = document.createElement ('input')
    email.className = 'input';
    email.id = 'email';
    email.placeholder = 'Correo electrónico';
    form.appendChild(email);

    const password = document.createElement ('input')
    password.className = 'input';
    password.id = 'password';
    password.placeholder = 'Contraseña'
    form.appendChild(password);

    const confPassword = document.createElement ('input');
    confPassword.className = 'input';
    confPassword.id = 'confPassword';
    confPassword.placeholder = 'Confirmar contraseña';
    form.appendChild(confPassword);

    const btnCrear = document.createElement ('button');
    btnCrear.className = 'btn';
    btnCrear.id = ('btnCrear')
    btnCrear.textContent = 'Crear cuenta';
    form.appendChild(btnCrear);
    btnCrear.addEventListener('click', register);
    //Aca se llama la funcion de firebase

    const btnGoogle = document.createElement ('button');
    btnGoogle.className = 'btn';
    btnGoogle.textContent = 'Ingresar con Google';
    form.appendChild(btnGoogle);
    btnGoogle.addEventListener('click', googleAuth);

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