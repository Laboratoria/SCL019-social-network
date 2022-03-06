 export const firstscreen = () => {
     const muro = document.createElement("div");
     muro.className='muropost';
     muro.innerHTML= `
     <div class= "contenedor-muro">
     <h1> Hola Bienvenido a Bazinga!</h1>
     </div>`

     return muro;
 }