const register = () => {
const name = document.getElementById('username').value;
const email = document.getElementById ('email').value;
const password = document.getElementById ('password').value;
const confPassword = document.getElementById ('confPassword').value;

}
 
const btnCrear = document.getElementById('btnCrear');
btnCrear.addEventListener('click', register);