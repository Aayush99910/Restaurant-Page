import burger1 from "../assests/imgs/burger.jpg";
import burger2 from "../assests/imgs/burger2.jpg";


const Burger = [
    {
        title: "DOUBLE SIZED CHICKEN BURGER",
        image: burger1,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "CHEESE BURGER",
        image: burger2,
        description: "Some awesome desciption about the food and also includes the ingredients."
    }
]

export default function loadBurger() {
    const menuCardContainer = document.querySelector(".menu-card-container");
    menuCardContainer.innerHTML = " ";


    for (let i = 0; i < Burger.length; i++) {
        // children of menuCardContainer
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        // children of menuCard
        const foodImage = document.createElement("img");
        foodImage.src = Burger[i].image;
        const menuCardAbout = document.createElement("div");
        menuCardAbout.classList.add("menu-card-about");

        // children of menuCardAbout
        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = Burger[i].title;
        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = Burger[i].description;
        
        // appending children to menuCardAbout
        menuCardAbout.append(title, description);

        // appending children to menuCard
        menuCard.append(foodImage, menuCardAbout);

        // appending the child to menuCardContainer
        menuCardContainer.append(menuCard);
    }
}