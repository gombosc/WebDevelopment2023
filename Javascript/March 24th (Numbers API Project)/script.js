// start button and container for it 
const buttonStart = document.getElementById("start-btn");
const startBtnContainer = document.getElementById("StartBtnContainer")

const divTrivia = document.getElementById("NumbersTrivia");
const inputValue = document.getElementById("numberValue");
const btnValue= document.getElementById("btnValue");
const apiResponse = document.getElementById("ApiResponse")


function showOptions(){

}

// Show options after main button is pressed
function showNumbersTrivia(){
    // divTrivia.hidden = !divTrivia.hidden;
    // welcomeText = document.getElementById("Welcome").innerHTML = "Numbers Trivia"
    // startBtnContainer.remove()
}

async function fetchFromApi(inputValue){
    try{
    const response = await fetch(`http://numbersapi.com/${inputValue}/math`);
    const data = await response.text();
    // spent way too much time figuring out this error
    apiResponse.textContent = data;
    console.log(data);
        }
        catch(error){
            console.error("Fetching Error: ", error);
            apiResponse.textContent = "Failed Loading Text..."
        }
    }
    
 btnValue.addEventListener("click", ()=>{
    const valueFromInput = inputValue.value;
    fetchFromApi(valueFromInput);
    console.log("The Input Value is: " , valueFromInput);
 })



