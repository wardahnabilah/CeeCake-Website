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



/** Show All Button **/

// Class to create selectors for every items group
class ItemsContainer {
    constructor(id) {
        this.item = document.querySelectorAll(`${id} .item-container`);
        this.showAll = document.querySelector(`${id} .show-all`);
    }
}

// Create object for every items group
const wholeCake = new ItemsContainer("#whole-cake");
const cupcake = new ItemsContainer("#cupcake");
const bread = new ItemsContainer("#bread");
const cookie = new ItemsContainer("#cookie");
const macaron = new ItemsContainer("#macaron");


// Function for showing all items
function showItems(itemsGroup) {

    //Make every item visible
    for(let i = 0; i < itemsGroup.item.length; i++) {
        itemsGroup.item[i].classList.remove("display-none");
    }

    // Hide 'Show All' button
    itemsGroup.showAll.innerHTML = "";
}

// Add event listener to every items group
wholeCake.showAll.addEventListener("click", () => { showItems(wholeCake) });
cupcake.showAll.addEventListener("click", () => { showItems(cupcake) });
bread.showAll.addEventListener("click", () => { showItems(bread) });
cookie.showAll.addEventListener("click", () => { showItems(cookie) });
macaron.showAll.addEventListener("click", () => { showItems(macaron) });

