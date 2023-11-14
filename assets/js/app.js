
let counter = 0;
function count() {
    counter++;
    document.querySelector("#counter").innerHTML = counter;
    if (counter % 10 === 0) {
        // document.querySelector(".text2").style.fontSize = "4rem";
        document.querySelector(".text2").style.color = "#2f2f2f";
        document.querySelector(".text2").innerHTML = `Congratulations! You have counted by ${counter}.`;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault(); // prevent the default form submission behavior

        let username = document.querySelector("#username").value;
        // document.querySelector(".text").style.fontSize = "12rem";
        document.querySelector(".text").innerHTML = username;
    }

});


