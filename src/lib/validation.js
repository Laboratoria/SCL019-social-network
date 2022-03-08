//Función que valida el correo
export const validateEmail = (email)=>{
    //expresión regular que simula el patron de búsqueda del correo electrónico
    let regEx = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    return regEx.test(email);
  }

  //funcion que valida si los datos de usuario ne estan vacios y email es valido
  export const validateUser = (email, password) => {
      if(!validateEmail(email) || email === "" || password === "" || password.length<6){
          return false;
      }else{
          return true;
      }
  }

  //valida datos de nuevo usuario
  export const validateNewUser = (newUserEmail,newpassword,newUserName) => {
      if(!validateEmail(newUserEmail) || newUserEmail ==="" || newpassword==="" || newpassword.length<6 || newUserName === ""){
          return false;
      }else{
          return true;
      }
  }