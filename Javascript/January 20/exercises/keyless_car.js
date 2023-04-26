
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");}

// Solution to problem5:
// Method 1
function driverAge(userAge){
    if (userAge >= 18) {
        alert("Powering on...");
    }
    else alert("Powering off!       Go back to walking kiddo!");
    }

age = Number(prompt("What's your age?"));
driverAge(age)
    
// Method 2
var checkDriver = function(userAge){
    if (userAge >= 18) {
        alert("Powering on...");
    }
    else alert("Powering off!       Go back to walking kiddo!");
    }

age = Number(prompt("What's your age?"));
checkDriver(age);