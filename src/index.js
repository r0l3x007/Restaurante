import  "./stylesheet.css";
import navIgation from './home.js';

console.log('kutyagumi');

navIgation.drawNav();
navIgation.drawDesc();

/*function navBar(){
    const navigationBar = document.createElement(`HEADER`);

    const homePage = document.createElement(`div`);
    homePage.textContent = `HOME`;
    homePage.classList.add(`menuBtn`);
    navigationBar.appendChild(homePage)

    const menuPage = document.createElement(`div`);
    menuPage.textContent = `MENU`;
    menuPage.classList.add(`menuBtn`);
    navigationBar.appendChild(menuPage);

    const aboutPage = document.createElement(`div`);
    aboutPage.textContent = `PAGE`;
    aboutPage.classList.add(`menuBtn`);
    navigationBar.appendChild(aboutPage);


    return navigationBar;

}

document.body.appendChild(navBar());*/