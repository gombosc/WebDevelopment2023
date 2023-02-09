const quote = document.getElementById('quote')
const author = document.getElementById('author')
const button = document.getElementById('new-quote');

let apiQuotes =[];

function newQuote(){
    const quote1 = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote1)
     if(!quote.author == ''){
        author.innerHTML = 'Unknown';
     }else{
        author.innerHTML = quote1.author
     }
     if(quote1.text.length >= 50){
        quote.classList.add('long-quote');
     }else{
        quote.classList.remove('long-quote');
     }

     quote.textContent = quote1.text;
 }

//  --------- Search for difference between innerHtml and textContent

// Get Quotes from API
async function getQuotes(){
const apiUrl ='https://jacintodesign.github.io/quotes-api/data/quotes.json';
try{
    const response = await fetch(apiUrl)
    apiQuotes = await response.json();
    newQuote();
} catch(error){
    // Catch Error Here
    alert(error);
}
}

getQuotes();

// Replace quote with a random one each time a button is pressed


function replaceQuote(){
    random = Math.floor(Math.random() * apiQuotes.length)
    quote.innerHTML = apiQuotes[random].text;
    author.innerHTML = apiQuotes[random].author;
    console.log(apiQuotes(random))
    console.log(random)
}
button.addEventListener('click', replaceQuote);

