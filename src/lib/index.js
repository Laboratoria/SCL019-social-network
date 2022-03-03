
import { signIn } from "/vistas/SignIn.js";
import { signUp } from "/vistas/SignUp.js";
import { firstscreen } from "/vistas/muro.js";

export const changeRouter = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
    
switch (hash) {  
    case '#/':
    case '#/login':  
      containerRoot.appendChild(signIn());
      break;

      case '#/registrar':    
      containerRoot.appendChild(signUp());
      break;
      
      case '#/muro':
      containerRoot.appendChild(firstscreen());
        break;
      }
    }