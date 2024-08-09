// script.js


function showBar()
{
    const sidebar=document.querySelector('#sidebar')
    sidebar.style.display='flex';
}
function hidebar()
{
    const sidebar=document.querySelector('#sidebar')
    sidebar.style.display='none';
}
let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show slides
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const totalSlides = slides.length;

    if (n >= totalSlides) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = totalSlides - 1;
    }

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Auto slide
setInterval(() => {
    plusSlides(1);
}, 3000); // Change slide every 5 seconds
