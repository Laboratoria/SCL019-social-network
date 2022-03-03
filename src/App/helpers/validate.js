// import { formulario } from "../components/register";
//para abrir sesion
export const validateInput = (email, password) => {
  if (email === '' || password === '') {
    return false;
  }
  return true;
};

export const validateReg = (email, password, confPassword) => {
    if(email.length === 0 || password.length === 0 || confPassword.length === 0){
        return 'empty-input';
    }
return false;
};

export const compLength = (password, confPassword) => {
  if(password.length !== 6 && confPassword.length !== 6){
   return false;
  }
  return true;
}

export const compare = (password, confPassword) => {
  if(password.length === 6 && password === confPassword){
  return true;
}
return false;
};


export const showPassword = (e) =>{
  e.preventDefault()
  let p1 = document.getElementById('password1');
  if(p1.type == 'password'){
      p1.type = 'text'; 
  }else{
      p1.type = 'password';
  }
};

export const showPassword2 = (e) =>{
  e.preventDefault()
  let p2 = document.getElementById('confPassword');
  if(p2.type == 'password'){
      p2.type = 'text'; 
  }else{
      p2.type = 'password';
  }

};

