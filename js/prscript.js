let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
let slideIndex5 = 1;

showSlides1(slideIndex1);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);
showSlides5(slideIndex5);

function plusSlides(n) {
    showSlides1(slideIndex1 += n);
}

function currentSlide(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex1 = 1; }
    if (n < 1) { slideIndex1 = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
}

setInterval(function () {
    plusSlides(1);
}, 2000); // Change Slider 1 picture every 2 seconds

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides-2");
    let dots = document.getElementsByClassName("dot-2");
    if (n > slides.length) { slideIndex2 = 1; }
    if (n < 1) { slideIndex2 = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
}

setInterval(function () {
    plusSlides2(1);
}, 3000); // Change Slider 2 picture every 3 seconds

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides-3");
    let dots = document.getElementsByClassName("dot-3");
    if (n > slides.length) { slideIndex3 = 1; }
    if (n < 1) { slideIndex3 = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3 - 1].style.display = "block";
    dots[slideIndex3 - 1].className += " active";
}

setInterval(function () {
    plusSlides3(1);
}, 3300); // Change Slider 3 picture every 3.3 seconds

function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides-4");
    let dots = document.getElementsByClassName("dot-4");
    if (n > slides.length) { slideIndex4 = 1; }
    if (n < 1) { slideIndex4 = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4 - 1].style.display = "block";
    dots[slideIndex4 - 1].className += " active";
}

setInterval(function () {
    plusSlides4(1);
}, 2800); // Change Slider 4 picture every 2.8 seconds

function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides-5");
    let dots = document.getElementsByClassName("dot-5");
    if (n > slides.length) { slideIndex5 = 1; }
    if (n < 1) { slideIndex5 = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex5 - 1].style.display = "block";
    dots[slideIndex5 - 1].className += " active";
}

setInterval(function () {
    plusSlides5(1);
}, 3200); // Change Slider 5 picture every 3.2 seconds