import "./stylesheet.css"

const navIgation =(function(){

let container = document.getElementById('content');

function navBar(){
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


function descriptionCont(){
    const containerOfText = document.createElement(`div`);
    containerOfText.classList.add(`txtDesc`);

    const txtContain =  document.createElement(`div`);
    txtContain.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    txtContain.classList.add(`descCont`);
    containerOfText.appendChild(txtContain);
    container.appendChild(containerOfText);
}



return{
    drawNav:()=>{
        return container.appendChild(navBar());
    },
    drawDesc:()=>{
        return container.appendChild(descriptionCont())
    }
}


})();


export default navIgation;

