var number1 = prompt("Insert first number: ");
var number2 = prompt("Insert second number: ");
var userChoice = prompt("Choose action! " + "Type 1 for sum. " + "Type 2 for subtraction " + "Type 3 for multiplication " + "Insert Number: ");

var sum = Number(number1) + Number(number2);
var sub = number1 - number2;
var mult = Number(number1) * Number(number2);
if (Number(userChoice) === 1) {
    console.log(sum);
} else if (Number(userChoice) === 2) {
    console.log(sub)
} else if (Number(userChoice) === 3) {
    alert(mult)
}  

