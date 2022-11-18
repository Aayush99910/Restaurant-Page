import restroImage from "../assests/imgs/restro.jpg";
import loadAllItems from "./loadItems";
import loadHotDrinks from "./loadHotDrinks.js";
import loadBeverages from "./loadBeverages.js";
import loadBurger from "./loadBurger.js";
import loadPizza from "./loadPizza.js";


export default function homePage() {
    // bigContainer which will have all the content of the page
    const bigContainer = document.querySelector("#content");

    bigContainer.innerHTML = "";


    // body part of the content
    const bodyContainer = document.createElement("div");
    bodyContainer.classList.add("home-body-container");

    // first child of the body
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    
    // child of imageContainer
    const restroImg = document.createElement("img");
    restroImg.src = restroImage;

    // appending the image
    imageContainer.append(restroImg);


    // second child of the body
    const menuTitleContainer = document.createElement("div");
    menuTitleContainer.classList.add("menu-title-container");

    // children of menuTitleContainer
    const menu = document.createElement("p");
    menu.textContent = "Menu";
    const menuType = document.createElement("div");
    menuType.classList.add("menu-type");

    // children of menuType
    const all = document.createElement("p");
    all.textContent = "All";
    all.id = "all";
    const drinks = document.createElement("p");
    drinks.textContent = "Hot Drinks";
    drinks.id = "drink";
    const beverages = document.createElement("p");
    beverages.textContent = "Beverages";
    beverages.id = "beverages";
    const pizza = document.createElement("p");
    pizza.textContent = "Pizza";
    pizza.id = "pizza";
    const burger = document.createElement("p");
    burger.textContent = "Burger";
    burger.id = "burger";

    // appending the child to menuType
    menuType.append(all, drinks, beverages, pizza, burger);

    // appending the child to menuTitleContainer
    menuTitleContainer.append(menu, menuType);


    // third child of the body
    const menuCardContainer = document.createElement("div");
    menuCardContainer.classList.add("menu-card-container");

    //appending children to bodyContainer
    bodyContainer.append(imageContainer, menuTitleContainer,menuCardContainer);

    // appending the header and the body to the bigContainer
    bigContainer.append(bodyContainer);

    loadAllItems();

    // eventListener for allItems
    const allItemsTab = document.querySelector("#all");
    allItemsTab.addEventListener("click", function () {
        loadAllItems();
    });

    // eventListener for hotDrinks
    const hotDrinksTab = document.querySelector("#drink");
    hotDrinksTab.addEventListener("click", function () {
        loadHotDrinks();
    });

        // eventListener for Beverages
    const beveragesTab = document.querySelector("#beverages");
    beveragesTab.addEventListener("click", function () {
        loadBeverages();
    });


    // eventListener for Beverages
    const pizzaTab = document.querySelector("#pizza");
    pizzaTab.addEventListener("click", function () {
        loadPizza();
    });


    // eventListener for Beverages
    const burgerTab = document.querySelector("#burger");
    burgerTab.addEventListener("click", function () {
        loadBurger();
    });
}