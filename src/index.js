// importing the css file and images
import "./style.css";

// importing the module
import homePage from "./functions/homepage.js";
import loadHeader from "./functions/loadHeader.js";
import loadFooter from "./functions/footer.js";
import contact from "./functions/contact.js";
import loadAllItems from "./functions/loadItems.js";
import loadHotDrinks from "./functions/loadHotDrinks.js";
import loadBeverages from "./functions/loadBeverages.js";
import loadBurger from "./functions/loadBurger.js";
import loadPizza from "./functions/loadPizza.js";

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
