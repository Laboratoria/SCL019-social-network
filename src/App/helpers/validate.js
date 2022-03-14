export const emptyInput = (email, password, confPassword) => {
  if (email.length === 0 || password.length === 0 || confPassword.length === 0) {
    return true;
  }
  return false;
};

export const comparePassword = (password, confPassword) => {
  if (password !== confPassword) {
    return true;
  }
  return false;
};
//crear validaciones para log
export const emptyInputLog = (email, password) => {
if (email.length === 0 || password.length === 0){
  return true;
 }
 return false;
};


