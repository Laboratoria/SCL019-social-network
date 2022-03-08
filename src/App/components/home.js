export const home = () => {

    const homeCont = document.createElement('div');
    homeCont.className = 'homeCont';

    const homeHead = document.createElement('div');
    homeHead.className = 'homeHead';
    homeCont.appendChild(homeHead);

    const homeLogo = document.createElement('div');
    homeLogo.className = 'logo'
    homeLogo.textContent = 'Kitter';
    homeHead.appendChild(homeLogo);

    const homeLogout = document.createElement('div');
    homeLogout.className = 'logout'
    homeHead.appendChild(homeLogout);


    return homeCont;
}
