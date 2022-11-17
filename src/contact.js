export default function contact (restroBackImage, instaIcon, facebookIcon, twitterIcon, tiktokIcon, whatsappIcon, UberEatsIcon) {
    // bigContainer which will have all the content of the page
    const bigContainer = document.querySelector("#content");
    bigContainer.innerHTML = "";

    // bodyContainer
    const bodyContainer = document.createElement("div");
    bodyContainer.classList.add("body-container");

    // first child of the bodyContainer
    const imageBackContainer = document.createElement("div");
    imageBackContainer.classList.add("image-back-container");

    // children of imageBackContainer
    const image = document.createElement("img");
    image.src = restroBackImage;
    // image.classList.add("image");
    const contactUs = document.createElement("p");
    contactUs.textContent = "Contact Us";
    contactUs.classList.add("contact-us");

    // appending children to imageBackContainer
    imageBackContainer.append(image, contactUs);

    // second child of the bodyContainer
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    const message = document.createElement("p");
    message.textContent = "We provide the best food in the city.Come say hello and enjoy our food."
    messageContainer.append(message);

    // third child of the bodyContainer
    const contactDetailsContainer = document.createElement("div");
    contactDetailsContainer.classList.add("contact-details-container");
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");

    const email = document.createElement("p");
    email.textContent = "example@example.com";
    const location = document.createElement("p");
    location.textContent = "Location, Location";
    const personalNumbers = document.createElement("p");
    personalNumbers.textContent = "Personal Numbers";
    const number1 = document.createElement("p");
    number1.textContent = "+977 98XXXXXXXX";
    number1.classList.add("number");
    const number2 = document.createElement("p");
    number2.textContent = "+977 98XXXXXXXX";
    number2.classList.add("number");
    const officeNumber = document.createElement("p");
    officeNumber.textContent = "Office Number"
    const number3 = document.createElement("p");
    number3.textContent = "014-XXXXX";
    number3.classList.add("number");

    contactCard.append(email, location, personalNumbers, number1, number2, officeNumber, number3);


    const contact1Card = document.createElement("div");
    contact1Card.classList.add('contact1-card');

    const socialspara = document.createElement("p");
    socialspara.textContent = "Our Social Media";
    const socials = document.createElement("div");
    socials.classList.add('socials'); 
    const gridContainer = document.createElement("div");
    gridContainer.classList.add('grid-container');

    const instaImg = document.createElement("img");
    instaImg.classList.add("grid");
    instaImg.src = instaIcon;


    const facebookImg = document.createElement("img");
    facebookImg.classList.add("grid");
    facebookImg.src = facebookIcon;


    const twitterImg = document.createElement("img");
    twitterImg.classList.add("grid");
    twitterImg.src = twitterIcon;

    const tiktokImg = document.createElement("img");
    tiktokImg.classList.add("grid");
    tiktokImg.src = tiktokIcon;

    const whatsappImg = document.createElement("img");
    whatsappImg.classList.add("grid");
    whatsappImg.src = whatsappIcon;

    const uberEatsImg = document.createElement("img");
    uberEatsImg.classList.add("grid");
    uberEatsImg.src = UberEatsIcon;
    

    gridContainer.append(instaImg, facebookImg, twitterImg, tiktokImg, whatsappImg, uberEatsImg);

    socials.append(gridContainer);

    contact1Card.append(socialspara, socials);

    contactDetailsContainer.append(contactCard, contact1Card);

    // fourth child of the bodyContainer
    const findUsContainer = document.createElement("div");
    findUsContainer.classList.add("find-us-container");
    const findUs = document.createElement("p");
    findUs.textContent = "You can also find us at Uber Eats.";
    findUsContainer.append(findUs);

    // appending children to bodyContainer
    bodyContainer.append(imageBackContainer, messageContainer, contactDetailsContainer, findUsContainer);

    // appending child to bigContainer
    bigContainer.append(bodyContainer);
}