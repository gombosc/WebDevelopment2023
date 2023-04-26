// start button and container for it 
const buttonStart = document.getElementById("start-btn");
const startBtnContainer = document.getElementById("StartBtnContainer")

const divTrivia = document.getElementById("NumbersTrivia");
const inputValue = document.getElementById("numberValue");
const btnValue= document.getElementById("btnValue");
const apiResponse = document.getElementById("ApiResponse")




// Show options after main button is pressed
function showNumbersTrivia(){
    // divTrivia.hidden = !divTrivia.hidden;
    welcomeText = document.getElementById("Welcome").innerHTML = "Numbers Trivia"
    // startBtnContainer.remove()
}

async function fetchFromApi(inputValue){
    const url = window.location.href;
    let response;
    let random = Math.floor(Math.random() * 13);
    try{
        switch(true){
            case url.includes("NumbersTrivia"):
                response = await fetch(`http://numbersapi.com/${inputValue}`);
                break;
            case url.includes("Math"):
                response = await fetch(`http://numbersapi.com/${inputValue}/math`);
                break;
            case url.includes("Date") :
                response = await fetch(`http://numbersapi.com/${random}/${inputValue}/date`);
                break;
            case url.includes("Year"):
                response = await fetch(`http://numbersapi.com/${inputValue}/year`);
                break;
            default:
                alert("Wrong URL it seems...")
                console.log(url, response);
        }
        // Both are functional but switch statements is cleaner
        // if(url.includes("Numbers")){
        //     response = await fetch(`http://numbersapi.com/${inputValue}`);}
        // else if(url.includes("Math")){
        //     response = await fetch(`http://numbersapi.com/${inputValue}/math`);
        // }else if(url.includes("Date")){
        //     response = await fetch(`http://numbersapi.com/${inputValue}/math`);
        // }
        

        const data = await response.text();
        // spent way too much time figuring out this error
        apiResponse.textContent = `"${data}"`;
        console.log(data);
            }
            catch(error){
                console.error("Fetching Error: ", error);
                apiResponse.textContent = "Failed Loading Text..."
            }
        }
    
function buttonSubmit(){
    const valueFromInput = inputValue.value;
    // Could I do this with a switch function?
    fetchFromApi(valueFromInput);

}

function inputEnter(event){
    const valueFromInput = inputValue.value;
    apiResponse.hidden = false;
    if (valueFromInput.length != 0 && event.code === "Enter") {
        fetchFromApi(valueFromInput);
    }
}

 btnValue.addEventListener("click", buttonSubmit);
 inputValue.addEventListener("keypress", inputEnter);



//  Function created to verify if url is valid or not
// function checkUrl(address){
//     let currentUrl = window.location.href;
//     console.log(currentUrl);
//     if (currentUrl.includes(address)){
//         console.log("Correct Address")
//     } else{
//         alert("Wrong Address")
//     }
// }




