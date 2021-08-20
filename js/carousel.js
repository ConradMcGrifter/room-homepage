const SLIDES = Array.from(document.querySelectorAll(".img--wrap"));
const INFO = Array.from(document.querySelectorAll(".info--wrap"));
const PREVIOUS = document.querySelector(".previous--wrap");
const NEXT = document.querySelector(".next--wrap");

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
