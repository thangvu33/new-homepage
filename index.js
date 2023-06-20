const overlay = document.querySelector(".backdrop")
const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");

openMenu.addEventListener("click", () => {
    overlay.classList.add("open")
    navbar.classList.add("open")
})

closeMenu.addEventListener("click", () => {
    overlay.classList.remove("open")
    navbar.classList.remove("open")
})

overlay.addEventListener("click", () => {
    overlay.classList.remove("open")
    navbar.classList.remove("open")
})