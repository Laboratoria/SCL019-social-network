
import { signIn } from "/vistas/SignIn.js";
import { signUp } from "/vistas/SignUp.js";

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
      
        }
      };
