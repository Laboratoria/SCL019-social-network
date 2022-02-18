export const validateInput = (email, password) => {
  if (email === '' || password === '') {
    return false;
  }
  return true;
};

export const validateReg = (email, password, confPassword) => {
    if(email.length === 0 || password.length === 0 || confPassword.length === 0){
        return false;
    }
return true;
};