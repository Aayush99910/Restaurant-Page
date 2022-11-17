export default function initialHomePage(instaIcon, facebookIcon, restroImage, food1) {
    // bigContainer which will have all the content of the page
    const bigContainer = document.querySelector("#content");




    // header part of the content
    const header = document.createElement("header");

    // all the children for header
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    titleContainer.textContent = "FoodGhar";
    const nav = document.createElement("nav"); 

    // all the children for nav element
    const home = document.createElement("p");
    home.textContent = "Home";
    const contacts = document.createElement("p");
    contacts.textContent = "Contacts";
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




    // body part of the content
    const bodyContainer = document.createElement("div");
    bodyContainer.classList.add("body-container");

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
    const drinks = document.createElement("p");
    drinks.textContent = "Drinks";
    const beverages = document.createElement("p");
    beverages.textContent = "Beverages";

    // appending the child to menuType
    menuType.append(all, drinks, beverages);

    // appending the child to menuTitleContainer
    menuTitleContainer.append(menu, menuType);


    // third child of the body
    const menuCardContainer = document.createElement("div");
    menuCardContainer.classList.add("menu-card-container");

    // children of menuCardContainer
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    // children of menuCard
    const foodImage1 = document.createElement("img");
    foodImage1.src = food1;
    const menuCardAbout = document.createElement("div");
    menuCardAbout.classList.add("menu-card-about");

    // children of menuCardAbout
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "DOUBLE SIZED CHICKEN BURGER";
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "Some awesome desciption about the food and also includes the ingredients."; 

    // appending children to menuCardAbout
    menuCardAbout.append(title, description);

    // appending children to menuCard
    menuCard.append(foodImage1, menuCardAbout);

    // appending the child to menuCardContainer
    menuCardContainer.append(menuCard);


    //appending children to bodyContainer
    bodyContainer.append(imageContainer, menuTitleContainer, menuCardContainer);
    

    // appending the header and the body to the bigContainer
    bigContainer.append(header, bodyContainer);
}