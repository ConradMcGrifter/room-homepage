const SLIDES = Array.from(document.querySelectorAll(".img--wrap"));
const INFO = Array.from(document.querySelectorAll(".info--wrap"));
const PREVIOUS = document.querySelector(".previous--wrap");
const NEXT = document.querySelector(".next--wrap");

let slideIndex = 0;

const showSlide = (n) => {
    // if the number passed into the function is larger than the length of the SLIDES array -1, reset the slide index to 0 (start)
    if (n > SLIDES.length - 1) {
        slideIndex = 0;
    }

    // if the number passed into the function is smaller than 0, change the slide index to the last slide (whatever the length of the array is -1)
    if (n < 0) {
        slideIndex = SLIDES.length - 1;
    }

    // remove the display class from each slide. this will hide them from view
    SLIDES.forEach((slide) => {
        slide.classList.remove("display");
    });

    // remove the display class from each info-box slide. this will hide them from view
    INFO.forEach((info) => {
        info.classList.remove("display");
    });

    // add the display class to show the specific slide and info-box. [slideIndex] will target the correct element in the array since arrays are 0 based.
    SLIDES[slideIndex].classList.add("display");
    INFO[slideIndex].classList.add("display");
};

// this function is used to icrease or decrease the slideIndex value
const changeSlide = (n) => {
    showSlide((slideIndex += n));
};

// left arrow event listener
PREVIOUS.addEventListener("click", () => {
    changeSlide(-1);
});

// right arrow event listener
NEXT.addEventListener("click", () => {
    changeSlide(1);
});
