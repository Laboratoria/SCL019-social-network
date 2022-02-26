import {formulario} from "./components/register.js"
import {home} from "./components/home.js"
import {ingresar} from "./components/login.js"

export const changeView = (hash) => {
        if (hash === '#/' || hash === '' || hash === '#'){
            return showView('#/ingresar');
        } else if (hash === '#/formulario' || hash === '#/ingresar' || hash === '#/home' ){
            return showView(hash);
        } else {return showView('#/ingresar');
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
        case 'ingresar' :
            root.appendChild(ingresar());
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
    window.addEventListener('load',changeView(window.location.hash));
    window.addEventListener('hashchange', () => {
        changeView(window.location.hash)
    });


}


