const SLIDES = Array.from(document.querySelectorAll(".img--wrap"));
const INFO = Array.from(document.querySelectorAll(".info--wrap"));
const PREVIOUS = document.querySelector(".previous--wrap");
const NEXT = document.querySelector(".next--wrap");
const HAMBURGER_BTN = document.querySelector(".hamburger-btn");
const CLOSE = document.querySelector(".x");
const HAMBURGER = document.querySelector(".hamburger");
const MOBILE_LINKS = document.querySelector(".nav__ul");
const DARKEN = document.querySelector(".darken");

let slideIndex = 1;

const showSlide = (n) => {
    if (n > SLIDES.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = SLIDES.length;
    }

    SLIDES.forEach((slide) => {
        slide.classList.remove("display");
    });

    INFO.forEach((info) => {
        info.classList.remove("display");
    });

    SLIDES[slideIndex - 1].classList.add("display");
    INFO[slideIndex - 1].classList.add("display");
};

const changeSlide = (n) => {
    showSlide((slideIndex += n));
};

PREVIOUS.addEventListener("click", () => {
    changeSlide(-1);
});

NEXT.addEventListener("click", () => {
    changeSlide(1);
});

HAMBURGER_BTN.addEventListener("click", () => {
    MOBILE_LINKS.classList.toggle("display");
    CLOSE.classList.toggle("display");
    HAMBURGER.classList.toggle("display");
    DARKEN.classList.toggle("display");
});
