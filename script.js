
//This Script Contains code for the preloader and navigation bar in every Page
//Preloader Animation

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
 setTimeout(function() {
     loader.style.display = "none";
 },500); 
});


//Navigation Bar
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

//Slides Functions index page
function plusSlides(n) {
    showSlides(slideIndex += n);
}


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

setInterval(() => {
    plusSlides(1);
}, 3000); 


