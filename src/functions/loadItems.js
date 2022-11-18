import food1 from "./assests/imgs/burger.jpg";
import food2 from "./assests/imgs/cake.jpg";
import food3 from "./assests/imgs/pizza.jpg";
import food4 from "./assests/imgs/chicken.jpg";
import food5 from "./assests/imgs/coffee.jpg";
import food6 from "./assests/imgs/sandwich.jpg";
import food7 from "./assests/imgs/tea.jpg";
import food8 from "./assests/imgs/hotlemon.jpg";
import food9 from "./assests/imgs/coke.jpg";
import food10 from "./assests/imgs/bobatea.jpg";

const Food = [
    {
        title: "DOUBLE SIZED CHICKEN BURGER",
        image: food1,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "CHOCOLATE CAKE",
        image: food2,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "CHEESE PIZZA",
        image: food3,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "CHICKEN TANDOORI WITH MASALA",
        image: food4,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "HOT COFFEE",
        image: food5,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "VEG SANDWICH",
        image: food6,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "HOT TEA",
        image: food7,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "HOT LEMON",
        image: food8,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "COKE",
        image: food9,
        description: "Some awesome desciption about the food and also includes the ingredients."
    },
    {
        title: "BOBA TEA",
        image: food10,
        description: "Some awesome desciption about the food and also includes the ingredients."
    }
]


export default function loadAllItems() {
    const menuCardContainer = document.querySelector(".menu-card-container");
    menuCardContainer.innerHTML = " ";


    for (let i = 0; i < Food.length; i++) {
        // children of menuCardContainer
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        // children of menuCard
        const foodImage = document.createElement("img");
        foodImage.src = Food[i].image;
        const menuCardAbout = document.createElement("div");
        menuCardAbout.classList.add("menu-card-about");

        // children of menuCardAbout
        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = Food[i].title;
        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = Food[i].description;
        
        // appending children to menuCardAbout
        menuCardAbout.append(title, description);

        // appending children to menuCard
        menuCard.append(foodImage, menuCardAbout);

        // appending the child to menuCardContainer
        menuCardContainer.append(menuCard);
    }
}