var img = document.querySelector(".hero")
var x = window.matchMedia("(min-width: 776px)")
const form = document.querySelector("form")
var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
var input = document.querySelector("input");
var image = document.querySelector(".error-image")
var p = document.querySelector(".p-error")

if (x.matches) {
    img.setAttribute("src", "./images/hero-desktop.jpg")
}

function errorChecker(){
    if ((input.value === "") || (!(input.value.match(regex)))) {
        input.classList.add("error-input")
        image.classList.remove("error")
        p.classList.remove("error")
        return false;
    } 
}

form.addEventListener("submit", errorChecker);