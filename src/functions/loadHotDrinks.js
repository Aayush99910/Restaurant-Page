import drink1 from "./assests/imgs/hotlemon.jpg";
import drink2 from "./assests/imgs/tea.jpg";
import drink3 from "./assests/imgs/coffee.jpg";

const Drink = [
    {
        title: "HOT LEMON",
        image: drink1,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "TEA",
        image: drink2,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "HOT COFFEE",
        image: drink3,
        description: "Some awesome desciption about the food and also includes the ingredients."
    }
]

export default function loadHotDrinks() {
    const menuCardContainer = document.querySelector(".menu-card-container");
    menuCardContainer.innerHTML = " ";


    for (let i = 0; i < Drink.length; i++) {
        // children of menuCardContainer
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        // children of menuCard
        const foodImage = document.createElement("img");
        foodImage.src = Drink[i].image;
        const menuCardAbout = document.createElement("div");
        menuCardAbout.classList.add("menu-card-about");

        // children of menuCardAbout
        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = Drink[i].title;
        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = Drink[i].description;
        
        // appending children to menuCardAbout
        menuCardAbout.append(title, description);

        // appending children to menuCard
        menuCard.append(foodImage, menuCardAbout);

        // appending the child to menuCardContainer
        menuCardContainer.append(menuCard);
    }
}