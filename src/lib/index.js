
import { signIn } from "../vistas/SignIn.js";
import { signUp } from "../vistas/SignUp.js";
import { firstscreen } from "../vistas/muro.js";
import { welcome } from "../vistas/welcome.js"

export const changeRouter = async (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
    
switch (hash) {  
    case '#/':
    
    case '#/welcome':  
    containerRoot.appendChild(welcome());
    break;

    case '#/login':  
      containerRoot.appendChild(signIn());
      break;

      case '#/registrar':    
      containerRoot.appendChild(signUp());
      break;
      
      case '#/muro':
      containerRoot.appendChild( await firstscreen());
        break;
      }
    }