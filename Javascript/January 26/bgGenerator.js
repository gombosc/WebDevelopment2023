colors = document.getElementsByTagName('input');
h3 = document.querySelector('h3');
body = document.getElementById('gradient');

h3.innerHTML = body.style.background;

function gradient(){
    body.style.background = 
    `linear-gradient(to right, ${colors[0].value}, ${colors[1].value})`;
    h3.innerHTML = body.style.background
}

colors[0].addEventListener('input', gradient);
colors[1].addEventListener('input', gradient);

