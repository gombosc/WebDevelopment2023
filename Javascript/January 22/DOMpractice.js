var input = document.getElementById("userInput");
var button = document.getElementById("btn");
var ul = document.querySelector("ul");
var list = document.getElementsByClassName("line-through");


//add items to list
function addItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addItemBtn(event) {
    if (input.value.length != 0 && event.code === "Enter") { addItem() }
}

function addItemClick() {
    if (input.value.length != 0) {
        addItem();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    //  Execute the code after the HTML content is loaded
    // () => {} is equal to function(){}


    // const myList = document.querySelector(".my-list"); 
    // this is equal to var ul = document.querySelector("ul");
    const listElements = Array.from(ul.children);


    function checkItem() {
        // The `this` keyword is the clicked element
        this.classList.toggle("line-through");
    }

    listElements.forEach(li => {
        // li => is equal to function(li); and li is index[0] [1] and so on
        li.addEventListener("click", checkItem);
    })
    
});






//  Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

button.addEventListener("click", addItemClick);

input.addEventListener("keypress", addItemBtn);
