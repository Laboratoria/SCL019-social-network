
export const signUp = () => {
    const divSignUp = document.createElement("div");
    const viewSignUp =`
  <form id ="form-SignUp" class="form-SignUp">
     <h1>Regístrate</h1>
    <form class="mb-3" id="signUpEmail">
     <input type="text" placeholder="Usuario" id="user" required>
     <br>
     <input type="email" placeholder="correo electrónico" id="Email" required>
    </form><br>
    <form class="mb-3"  id="signUpPassword">
     <input type="password" placeholder="Contraseña" id="password" required>
     <br>
     <input type="password" placeholder="Contraseña" id="password1" required>
    </form><br>
  <button type="submit" class= "primary" id="button-SignUp">Regístrate</button>
  </form>
  `
  divSignUp.innerHTML =viewSignUp;
  
  return divSignUp;
  
  };

  const password = document.getElementById

