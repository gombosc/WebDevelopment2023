const buttonMain = document.getElementById("start-btn");
const divTrivia = document.getElementById("NumbersTrivia");
const inputValue = document.getElementById("numberValue");
const btnValue= document.getElementById("btnValue");
const apiResponse = document.getElementById("ApiResponse")


function showNumbersTrivia(){
    divTrivia.hidden = !divTrivia.hidden;
    // buttonMain.remove()
}

async function fetchFromApi(inputValue){
    const response = await fetch(`http://numbersapi.com/${inputValue}/math`);
    const data = await response.text();
    // spent way too much time figuring out this error
    apiResponse.innerHTML = data;
    console.log(data);
    }
    
 btnValue.addEventListener("click", ()=>{
    const valueFromInput = inputValue.value;
    fetchFromApi(valueFromInput);
    console.log("The Input Value is: " , valueFromInput);
 })



