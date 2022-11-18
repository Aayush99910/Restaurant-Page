// importing the css file and images
import "./style.css";

// importing the module
import homePage from "./homepage.js";
import loadHeader from "./loadHeader.js";
import loadFooter from "./footer.js";
import contact from "./contact.js";
import loadAllItems from "./loadItems.js";
import loadHotDrinks from "./loadHotDrinks.js";
import loadBeverages from "./loadBeverages.js";
import loadBurger from "./loadBurger.js";
import loadPizza from "./loadPizza.js";

// loads Header and homepage as default
loadHeader();
homePage();
loadFooter();

// eventListener for homeTab
const homeTab = document.querySelector("#home");
homeTab.addEventListener("click", function () {
    homePage();
});


// eventListener for contactTab
const contactTab = document.querySelector("#contacts");
contactTab.addEventListener("click", function () {
    contact();
});


// eventListener for allItems
const allItemsTab = document.querySelector("#all");
allItemsTab.addEventListener("click", function () {
    console.log("I");
    loadAllItems();
});


// eventListener for hotDrinks
const hotDrinksTab = document.querySelector("#drink");
hotDrinksTab.addEventListener("click", function () {
    console.log("I");
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
