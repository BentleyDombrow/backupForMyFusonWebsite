const menuButton = document.querySelector(".container");
const xButton = document.querySelector(".change");


let changeTracker = true;


function openChecker() {

    if (changeTracker){

        openNav();
        changeTracker = false;
        return;

    }

    if (!changeTracker){

        closeNav();
        changeTracker = true;
        return;

    }


}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100vw";
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

menuButton.addEventListener("click", openChecker);


/* Code below checks to make sure that the nav menu doesnt stay open if the media is widen above the preset 1300px */

window.addEventListener("resize", function() {

    if (window.matchMedia("(min-width: 1300px)").matches) {
      closeNav();

        if (!changeTracker){
            transform(menuButton);
            changeTracker = true;
        } 
    }
});

//function for transforming the hamburger menu
//--------------------------------------------------------------------------------------------------------------------------------
function transform(x) {
    x.classList.toggle("change");
}

const alertMe = () =>{

    alert('Hello World!');

}

//Logic for making the google review section carousel work
//--------------------------------------------------------------------------------------------------------------------------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}