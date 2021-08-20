const HAMBURGER_BTN = document.querySelector(".hamburger-btn");
const CLOSE = document.querySelector(".x");
const HAMBURGER = document.querySelector(".hamburger");
const MOBILE_LINKS = document.querySelector(".nav__ul");
const DARKEN = document.querySelector(".darken");

HAMBURGER_BTN.addEventListener("click", () => {
    MOBILE_LINKS.classList.toggle("display");
    CLOSE.classList.toggle("display");
    HAMBURGER.classList.toggle("display");
    DARKEN.classList.toggle("display");
});
