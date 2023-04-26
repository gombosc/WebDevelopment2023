 function calculate(a, b){
    const sum = a + b;
    const sub = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [sum, sub, multiply, divide]
}

const[sum, sub, multiply, divide] = calculate();
console.log(calculate(5,5))


// Destructuring for Objects

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: "red"
}



function myVehicle({type, color, brand, model}){
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model;
    return message;
}

console.log(myVehicle(vehicleOne))
