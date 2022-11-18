export default function loadFooter () {
    const body = document.querySelector("body");

    const footer = document.createElement("footer");
    const para = document.createElement("p");
    para.textContent = "Copyright. All rights reserved."

    footer.append(para);

    body.append(footer);
}