/** Enabled button when all inputs are not empty **/

const input = document.querySelectorAll(".input");
const button = document.querySelector(".order-button");

// Initialize button state to disabled
button.disabled = true;

function buttonState() {
    let empty = 0;
    // Check every input's value
    for(let i=0; i<input.length; i++) {
        if(input[i].value===""){
            empty+=1;
        }
    }

    if(!empty) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}


/** Show notification when input value invalid **/

let nameInput = document.querySelector("#receiver-name");
let addressInput = document.querySelector("#address");
let phoneInput = document.querySelector("#phone-number");

let nameNotification = document.querySelector("#name-notification");
let addressNotification = document.querySelector("#address-notification");
let phoneNotification = document.querySelector("#phone-notification");

function showNotification() {
    // Receiver name input
    if(!nameInput.validity.valid) {
        nameNotification.classList.add("show");
    }
    else {
        nameNotification.classList.remove("show");
    }

    // Address input
    if(!addressInput.validity.valid) {
        addressNotification.classList.add("show");
    }
    else {
        addressNotification.classList.remove("show");
    }

    // Phone number input
    if(!phoneInput.validity.valid) {
        phoneNotification.classList.add("show");
    }
    else {
        phoneNotification.classList.remove("show");
    }
}


/** Add eventListener to all inputs **/
for(let i=0; i<input.length; i++) {
    input[i].addEventListener("input", buttonState);
    input[i].addEventListener("input", showNotification);
}