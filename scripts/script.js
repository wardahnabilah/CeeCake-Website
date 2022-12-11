let burgerButton = document.querySelector(".burger-button");

function showNav() {
    let nav= document.querySelector("nav");

    if(nav.className === "") {
        nav.classList.add("appear");
    }
    else{
        nav.classList.remove("appear");
    }
}

burgerButton.addEventListener("click", showNav);
