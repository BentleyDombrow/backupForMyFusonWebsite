const menuButton = document.querySelector(".container");
const xButton = document.querySelector(".change");


let changeTracker = true;

let selectorTracker = true;


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


//function for making the our services section work
//--------------------------------------------------------------------------------------------------------------------------------

const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')
      
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabValue);
        selectedMenu.style.display = "none";
        selectorTracker = true;
        
        tabs.forEach(holder =>{
            holder.classList.remove('active');
        })
        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
        })
        target.classList.add('active');
        tab.classList.add('active')
    })
})

const selector = document.querySelector('.tabsTitle')
selector.addEventListener('click', () => {

    selectedMenu = document.querySelector(".dropdown-content");

    if (selectorTracker){
        selectedMenu.style.display = "flex";
        selectedMenu.style.flexDirection = "column";
        selectorTracker = false;
    } else{
        selectedMenu.style.display = "none";
        selectorTracker = true;
    }

})

console.log(selector);