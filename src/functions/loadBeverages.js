import beverages1 from "../assests/imgs/coke.jpg";
import beverages2 from "../assests/imgs/bobatea.jpg";


const Beverages = [
    {
        title: "COKE",
        image: beverages1,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "BOBA TEA",
        image: beverages2,
        description: "Some awesome desciption about the food and also includes the ingredients."
    }
]

export default function loadBeverages() {
    const menuCardContainer = document.querySelector(".menu-card-container");
    menuCardContainer.innerHTML = " ";


    for (let i = 0; i < Beverages.length; i++) {
        // children of menuCardContainer
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        // children of menuCard
        const foodImage = document.createElement("img");
        foodImage.src = Beverages[i].image;
        const menuCardAbout = document.createElement("div");
        menuCardAbout.classList.add("menu-card-about");

        // children of menuCardAbout
        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = Beverages[i].title;
        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = Beverages[i].description;
        
        // appending children to menuCardAbout
        menuCardAbout.append(title, description);

        // appending children to menuCard
        menuCard.append(foodImage, menuCardAbout);

        // appending the child to menuCardContainer
        menuCardContainer.append(menuCard);
    }
}