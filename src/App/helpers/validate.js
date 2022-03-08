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

export const showPassword = (e) => {
  e.preventDefault();
  const p1 = document.getElementById('password1');
  if (p1.type === 'password') {
    p1.type = 'text';
  } else {
    p1.type = 'password';
  }
};

export const showPassword2 = (e) => {
  e.preventDefault();
  const p2 = document.getElementById('confPassword');
  if (p2.type === 'password') {
    p2.type = 'text';
  } else {
    p2.type = 'password';
  }
};

export const showPassword3 = (e) => {
  e.preventDefault();
  const p1 = document.getElementById('password');
  if (p1.type === 'password') {
    p1.type = 'text';
  } else {
    p1.type = 'password';
  }
};
