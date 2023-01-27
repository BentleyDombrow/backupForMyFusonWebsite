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
/*
//Code for making the navbar sticky
//--------------------------------------------------------------------------------------------------------------------------------

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyMaker()};

// Get the header
var header = document.querySelector(".notSure");
console.log(header)

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMaker() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.style.backgroundColor = '#0D0D0D'
  } else {
    header.classList.remove("sticky");
    header.style.backgroundColor = 'transparent'
  }
}
*/


