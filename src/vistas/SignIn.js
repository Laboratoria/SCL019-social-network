
export const signIn = () => {
  const divSignIn = document.createElement("div");
    const viewSignIn =  `
    <form id = "form-IniciaSe" class="form-IniciaSe">
    <h1>Inicia Sesión</h1>
   <Stack gap={3}>
   <button type="submit" class= "primary2" id="iniciaGoogle">Ingresa con Google</button>
     <br>
   <form class="mb-3" id="formBasicEmail">
        <input type="email"  value = " " placeholder="correo electrónico" id=" ingresaEmail" >
    </form><br>
    <form class="mb-3"  id="formBasicPassword">
        <input type="text"  value=" "placeholder="Contraseña" id="ingresaContraseña" >
    </form>
 <br>
 <button type="submit" class="primary" id="buttoninicia">¿Ya tienes cuenta? Inicia Sesión</button>
 
 <button type="submit" class="primary" id="buttonRegistrar">¿No tienes cuenta? Regístrate</button>
      
 </Stack>
  </form></div>
  `
  divSignIn.innerHTML =viewSignIn;
  
  return divSignIn;
  
}  



  
