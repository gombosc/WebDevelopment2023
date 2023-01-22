var input = document.getElementById("userInput");
var button = document.getElementById("btn");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");


//add items to list
function addItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addItemBtn(event){
    if(input.value.length != 0 && event.code === "Enter")
    {addItem()}
}

function addItemClick(){
    if(input.value.length != 0){
       addItem(); 
    }}


// for(var i=0; i<=list.length; i++){
//    ul.addEventListener("click", function(){
//     for(var i=0; i<=list.length; i++)
//     {
//         list.addEventListener("click", function()
//         {
//             list[i].classList.toggle("line-through")
//         })
//     }
// })

if(ul.addEventListener("click" , function(e){}))
{
    console.log("clicked");
}




//  Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

button.addEventListener("click", addItemClick);

input.addEventListener("keypress", addItemBtn)
