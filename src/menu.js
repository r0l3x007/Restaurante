import './stylesheet.css'
import AvoImage from './avoToast.jpg'
import Pizza from './pizzaHelth.jpg'
import Burger from './helthBurgir.jpg'
import NutSando from './nutSandwhich.jpg'
import ChickenT from './chickenTet.jpg'
import SmoothIe from './smoothH.jpg'

const mainMenu = (function(){

    let container = document.getElementById(`content`);

// creates the menu page appending the images and the afferent description
    function mainItems(){

    let menuCont =  document.createElement(`div`);
    menuCont.setAttribute(`id`,`menuCont`);

    //avocado menu item
    let avoToast = document.createElement(`div`);
    avoToast.classList.add(`menuItems`);

    let avoImg = new Image();
    avoImg.src = AvoImage;
    

    let avoText =  document.createElement(`div`);
    avoText.classList.add(`menuDetails`);
    avoText.textContent = `Delicious healthy avo toast`;


    avoToast.appendChild(avoImg);
    avoToast.appendChild(avoText);
    menuCont.appendChild(avoToast);


    //pizza menu item

    let helthPizza = document.createElement(`div`);
    helthPizza.classList.add(`menuItems`);
    
    let pizzaImg = new Image();
    pizzaImg.src = Pizza;

    let pizzaText =  document.createElement('div');
    pizzaText.classList.add('menuDetails');
    pizzaText.textContent = `Helathy delicious Pizza on rocks`;

    helthPizza.appendChild(pizzaImg);
    helthPizza.appendChild(pizzaText);
    menuCont.appendChild(helthPizza);


    //burgir menu item

    let helthBurger = document.createElement(`div`);
    helthBurger.classList.add(`menuItems`);
    
    let burgirImg = new Image();
    burgirImg.src = Burger;

    let burgirText =  document.createElement(`div`);
    burgirText.classList.add('menuDetails');
    burgirText.textContent = `helthy burgir with sweet patata fries`;

    helthBurger.appendChild(burgirImg);
    helthBurger.appendChild(burgirText);
    menuCont.appendChild(helthBurger);

    //peanutSandwhich menu item

    let peanutSand =  document.createElement(`div`);
    peanutSand.classList.add(`menuItems`);
    
    let peanutImg = new Image();
    peanutImg.src = NutSando;

    let nutText = document.createElement('div');
    nutText.classList.add('menuDetails');
    nutText.textContent = `Helthy peanut butter and jam sandwhich`

    peanutSand.appendChild(peanutImg);
    peanutSand.appendChild(nutText);
    menuCont.appendChild(peanutSand);
    
    //chickenBreast menu item

    let chickBreast =  document.createElement(`div`);
    chickBreast.classList.add(`menuItems`);

    let chickenImg = new Image();
    chickenImg.src = ChickenT;

    let chickText = document.createElement('div');
    chickText.classList.add('menuDetails');
    chickText.textContent = `chickenBreast healthy version`;

    chickBreast.appendChild(chickenImg);
    chickBreast.appendChild(chickText);
    menuCont.appendChild(chickBreast);


    //smoothie menu item

    let helthSmoothie =  document.createElement(`div`);
    helthSmoothie.classList.add(`menuItems`);
    
    let smoothImg =  new Image();
    smoothImg.src = SmoothIe;

    let smoothText =  document.createElement(`div`);
    smoothText.classList.add(`menuDetails`);
    smoothText.textContent = `Green sludge healthy stuff`;

    helthSmoothie.appendChild(smoothImg);
    helthSmoothie.appendChild(smoothText);
    menuCont.appendChild(helthSmoothie);


    return menuCont;

    }

    return{
        drawMenu:()=>{
            return container.appendChild(mainItems());
        }
    }


})();

export default mainMenu;