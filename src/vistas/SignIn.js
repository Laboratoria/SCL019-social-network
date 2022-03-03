import { authGoogle, iniciaSesion } from "../lib/compilacion.js";

export const signIn = () => {
    const sectSignIn = document.createElement("section");
    sectSignIn.className = 'signIn-container';
    sectSignIn.innerHTML = `
    <div class = 'signInContainer col-' >
    <form id = "form-IniciaSe" class="form-IniciaSe">
    <h1>Inicia Sesión</h1>
   <Stack gap={3}>
   <button type="submit" class= "primary2" id="iniciaGoogle">Ingresa con Google</button>
     <br>
   <form class="mb-3" id="formBasicEmail">
        <input type="email" placeholder="Correo Electrónico" id="ingresaEmail" >
    </form><br>
    <form class="mb-3"  id="formBasicPassword">
        <input type="password"  placeholder="Contraseña" id="ingresaContrasena" >
    </form>
 <br>
 <button type="submit" class="primary" id="buttoninicia">¿Ya tienes cuenta? Inicia Sesión</button>
 
 <button type="submit" class="primary"  id="buttonRegistrar">¿No tienes cuenta? Regístrate</button>
      
 </Stack>
  </form>
  </div>
  </div>
  `;


    sectSignIn.querySelector('#buttonRegistrar').addEventListener('click', () => {
        window.location.hash = '#/registrar';
    });

    sectSignIn.querySelector('#iniciaGoogle').addEventListener('click', () => {

        authGoogle();
  
    });

    sectSignIn.querySelector('#buttoninicia').addEventListener('click', (e) => {
      e.preventDefault();
      const email = sectSignIn.querySelector('#ingresaEmail').value;
      const password = sectSignIn.querySelector('#ingresaContrasena').value;
      console.log(email,password);

     iniciaSesion(email, password);
       
    });

    return sectSignIn;


}
