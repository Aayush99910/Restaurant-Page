// importing the css file and images
import "./style.css";
import instaIcon from "./assests/icons/instagram.png";
import facebookIcon from "./assests/icons/facebook.png"
import restroImage from "./assests/imgs/restro.jpg";
import food1 from "./assests/imgs/burger.jpg";


// importing the module
import homePage from "./homepage.js";
import loadHeader from "./loadHeader.js";
import contact from "./contact-page.js"

// loads Header and homepage as default
loadHeader(instaIcon, facebookIcon);
homePage(restroImage, food1);

// eventListener for homeTab
const homeTab = document.querySelector("#home");
homeTab.addEventListener("click", function () {
    homePage(restroImage, food1)
});


// eventListener for contactTab
const contactTab = document.querySelector("#contacts");
contactTab.addEventListener("click", contact);

