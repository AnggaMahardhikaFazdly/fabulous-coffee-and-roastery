const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("sliderCarousel");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 4 seconds
}


let catalogList = 1;
showDivs(catalogList);

function currentDiv(n) {
    showDivs(catalogList = n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("product");
    let dots = document.getElementsByClassName("buttonCatalog");
    if (n > x.length) { catalogList = 1 }
    if (n < 1) { catalogList = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[catalogList - 1].style.display = "flex";
}


document.querySelector(".openChatBtn").addEventListener("click", openForm);
document.querySelector(".close").addEventListener("click", closeForm);
function openForm() {
    document.querySelector(".openChat").style.display = "block";
}
function closeForm() {
    document.querySelector(".openChat").style.display = "none";
}