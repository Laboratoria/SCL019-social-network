export const welcome= () => {
    const welcomeScreen = document.createElement("div");
    welcomeScreen.className='signInMain';
    welcomeScreen.innerHTML= `
    <div class= "signIn-container gridContainer">
    <img src= "images/logo-1.png" alt="Bazinga_Speech_Bubble" id="logo" class= "logo col-12">
    
    <form id ="form-welcome" class="form-welcome col-12">
    <button type="submit" class="primary" id="buttoninicia">¿Ya tienes cuenta? Inicia Sesión</button>
    <button type="submit" class="primary"  id="buttonRegistrar">¿No tienes cuenta? Regístrate</button>
    </form>
    </div>`
;

welcomeScreen.querySelector('#buttoninicia').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/login';
});
welcomeScreen.querySelector('#buttonRegistrar').addEventListener('click', (e) => {
   e.preventDefault();
    window.location.hash = '#/registrar';
});

    return welcomeScreen;
}