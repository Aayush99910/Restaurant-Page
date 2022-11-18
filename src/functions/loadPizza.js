import pizza1 from "./assests/imgs/pizza.jpg";
import pizza2 from "./assests/imgs/pizza3.jpg";


const Pizza = [
    {
        title: "CHEESE PIZZA",
        image: pizza1,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "CHICKEN PIZZA",
        image: pizza2,
        description: "Some awesome desciption about the food and also includes the ingredients."
    }
]

export default function loadPizza() {
    const menuCardContainer = document.querySelector(".menu-card-container");
    menuCardContainer.innerHTML = " ";


    for (let i = 0; i < Pizza.length; i++) {
        // children of menuCardContainer
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        // children of menuCard
        const foodImage = document.createElement("img");
        foodImage.src = Pizza[i].image;
        const menuCardAbout = document.createElement("div");
        menuCardAbout.classList.add("menu-card-about");

        // children of menuCardAbout
        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = Pizza[i].title;
        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = Pizza[i].description;
        
        // appending children to menuCardAbout
        menuCardAbout.append(title, description);

        // appending children to menuCard
        menuCard.append(foodImage, menuCardAbout);

        // appending the child to menuCardContainer
        menuCardContainer.append(menuCard);
    }
}