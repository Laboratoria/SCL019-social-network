export const login = () => {
    const login = document.createElement('div');
    login.textContent = 'Aquí va el login';

    const prueba = document.createElement('a');
    prueba.textContent = 'crear una cuenta';
    prueba.classList = 'btn2';
    prueba.setAttribute('href', '#/formulario');
    login.appendChild(prueba);

    return login;
}
