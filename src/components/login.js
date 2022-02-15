const formulario = () => {
    const content = document.createElement('div');
    content.className = 'content';

    const head = document.createElement('head');
    head.className = 'head';
    content.appendChild(head);

    

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
    username.id = 'password';
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
    btnCrear.textContent = 'Crear cuenta';
    form.appendChild(btnCrear);

    const btnGoogle = document.createElement ('button');
    btnGoogle.className = 'btn';
    btnGoogle.textContent = 'Ingresar con Google';
    form.appendChild(btnGoogle);

    const registeredUser = document.createElement ('p');
    registeredUser.textContent = '¿Ya tienes una cuenta?';
    registeredUser.className = 'registrado';
    form.appendChild(registeredUser);

    const btnMode = document.createElement ('input');
    btnMode.className = 'btnMode';
    form.appendChild(btnMode);

    return content
}

export default formulario;