let slideIndex = 0;


function nextSlide() {
    showSlides(slideIndex + 1);
}

function previousSlide() {
    showSlides(slideIndex - 1);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n == slides.length) {
        n = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    console.log(slideIndex);
    console.log(n);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}