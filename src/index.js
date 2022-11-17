// importing the css file and images
import "./style.css";
import instaIcon from "./assests/icons/instagram.png";
import facebookIcon from "./assests/icons/facebook.png";
import twitterIcon from "./assests/icons/twitter.png";
import tiktokIcon from "./assests/icons/tiktok.png";
import UberEatsIcon from "./assests/icons/UberEats.png";
import whatsappIcon from "./assests/icons/whatsapp.png";
import restroImage from "./assests/imgs/restro.jpg";
import food1 from "./assests/imgs/burger.jpg";
import restroBackImage from "./assests/imgs/restroBack.jpg"


// importing the module
import homePage from "./homepage.js";
import loadHeader from "./loadHeader.js";
import loadFooter from "./footer.js";
import contact from "./contact.js"

// loads Header and homepage as default
loadHeader(instaIcon, facebookIcon);
homePage(restroImage, food1);
loadFooter();

// eventListener for homeTab
const homeTab = document.querySelector("#home");
homeTab.addEventListener("click", function () {
    homePage(restroImage, food1)
});


// eventListener for contactTab
const contactTab = document.querySelector("#contacts");
contactTab.addEventListener("click", function () {
    contact(restroBackImage, instaIcon, facebookIcon, twitterIcon, tiktokIcon, whatsappIcon, UberEatsIcon);
});

