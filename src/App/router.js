import {formulario} from "./components/register.js"
import {home} from "./components/home.js"
import {login} from "./components/login.js"

const changeView = (hash) => {
        if (hash === '#/' || hash === '' || hash === '#'){
            return showView('#/login'); 
        } else if (hash === '#/formulario' || hash === '#/login' || hash === '#/home' ){
            return showView(hash);
        } else {return showView('#/login');
    }
};

const showView = (routers) => {
    const router = routers.substr(2, routers.length - 2);
    const root = document.getElementById('root');

    root.innerHTML = '';
    switch(router){
        case 'formulario' :
            root.appendChild(formulario());
            break;
        case 'login' :
            root.appendChild(login());
            break;
        case 'home' :
            root.appendChild(home());
            break;
        default:
            root.appendChild(formulario());
            break;
    }
}


export const initRouter = () => {
    window.addEventListener('load',changeView(window.location.hash))
    if (('onhashchange' in window)) window.onhashchange = () => changeView(window.location.hash)
}