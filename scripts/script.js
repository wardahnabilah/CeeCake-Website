/** Burger Button **/

let burgerButton = document.querySelector(".burger-button");

// Function for showing navigation bar
function showNav() {
    let nav= document.querySelector("nav");

    // Add 'appear' class to make navigation bar visible
    if(nav.className === "") {
        nav.classList.add("appear");
    }

    // Remove 'appear' class to hide navigation bar
    else{
        nav.classList.remove("appear");
    }
}

// Add event listener to burger button
burgerButton.addEventListener("click", showNav);


