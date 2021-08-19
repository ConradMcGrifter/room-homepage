const SLIDES = Array.from(document.querySelectorAll(".img--wrap"));
const PREVIOUS = document.querySelector(".previous");
const NEXT = document.querySelector(".next");

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

    SLIDES[slideIndex - 1].classList.add("display");
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
