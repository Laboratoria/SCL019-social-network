
export const signUp = () => {
    const divSignUp = document.createElement("div");
    const viewSignUp = `
  <form id ="form-SignUp" class="form-SignUp">
     <h1>Regístrate</h1>
    
     <input type="text" placeholder="Usuario" id="user" required>
     <br>
     <input type="email" placeholder="correo electrónico" id="Email" required>
     <br>
     <input type="password" placeholder="Contraseña" id="password" required>
     <br>
     <input type="password" placeholder="Contraseña" id="password1" required>
   <br>
  <button type="button" class="primary" id="button-SignUp">Regístrate</button>
  </form>
  `
  divSignUp.innerHTML =viewSignUp;
  
  return divSignUp;
  
  };


 
  //
  //console.log(btonsignup);
 
  
    
 
  
