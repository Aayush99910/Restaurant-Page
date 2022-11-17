export default function loadHeader(instaIcon, facebookIcon) {
    const body = document.querySelector("body");

    // header part 
    const header = document.createElement("header");

    // all the children for header
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    titleContainer.textContent = "FoodGhar";
    const nav = document.createElement("nav"); 

    // all the children for nav element
    const home = document.createElement("p");
    home.textContent = "Home";
    home.id = "home";
    const contacts = document.createElement("p");
    contacts.textContent = "Contacts";
    contacts.id = "contacts" 
    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons-container");
    
    // all the children for iconsContainer
    const instaImg = document.createElement("img"); 
    const facebookImg = document.createElement("img"); 
    instaImg.src = instaIcon;
    facebookImg.src = facebookIcon;


    // appending all the items to iconsContianer
    iconsContainer.append(instaImg, facebookImg);

    // appending all the children to nav
    nav.append(home, contacts, iconsContainer);

    // appending the children to head element
    header.append(titleContainer, nav);

    body.prepend(header);
}