 export const firstscreen = () => {
     const muro = document.createElement("div");
     muro.className='muropost';
     muro.innerHTML= `
     <div class= "contenedor-muro">
     <h1> Hola Bienvenido a Bazinga!</h1>
     <button type="submit" class="primary" id="signOut">Cerrar Sesión</button>
     </div>`;


     muro.querySelector('#signOut').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#/welcome';
    });

     return muro;
 }