//Modal Registro
const btnSingUp = document.getElementById("buttonRegistrar");
const contenedorSingUp=document.getElementById("modalRegistro");

const singUp = () => {
return `
<form id ="form-SingUp" class="form-SingUp">
   <h1>Regístrate</h1>
  <form class="mb-3" id="singUpEmail">
   <input type="text" placeholder="correo electrónico" id="user" required>
   <br>
   <input type="email" placeholder="correo electrónico" id="Email" required>
  </form><br>
  <form class="mb-3"  id="singUpPassword">
   <input type="password" placeholder="Contraseña" id="password" required>
   <br>
   <input type="password" placeholder="Contraseña" id="password1" required>
  </form><br>
<button type="submit" class= "primary" id="button-SingUp">Regístrate</button>
</form>
`};
const modalSingUp= ()=> { 
  
   btnSingUp.addEventListener("click", () => {

        contenedorSingUp.innerHTML = " ";
        contenedorSingUp.innerHTML=singUp();
  });
  }
  modalSingUp();
console.log(modalSingUp());