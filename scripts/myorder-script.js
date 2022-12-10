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

// Add eventListener to all inputs
for(let i=0; i<input.length; i++) {
    input[i].addEventListener("input", buttonState);
}