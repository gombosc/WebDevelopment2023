const quote = document.getElementById('quote')
const author = document.getElementById('author')
const button = document.getElementById('new-quote');

let apiQuotes =[];

function newQuote(){
    const random = Math.floor(Math.random() *apiQuotes.length);
    quote.textContent = apiQuotes[random];
}


// Get Quotes from API
async function getQuotes(){
const apiUrl ='https://jacintodesign.github.io/quotes-api/data/quotes.json';
try{
    const response = await fetch(apiUrl)
    apiQuotes = await response.json();
} catch(error){
    // Catch Error Here
    alert(error);
}
}

getQuotes();
newQuote();

// Replace quote with a random one each time a button is pressed


function replaceQuote(){
    document.getElementById('quote').innerHTML = apiQuotes[random].text;
    document.getElementById('author').innerHTML = apiQuotes[random].author;
    console.log(apiQuotes(random))
    console.log(random)
}
button.addEventListener('click', replaceQuote);

