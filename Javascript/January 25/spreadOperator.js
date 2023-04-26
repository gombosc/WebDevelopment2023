const nrOne = [1,2,3];
const nrTwo = [4,5,6];

const nrCombined = [...nrOne, ...nrTwo];
console.log('Numbers are ' + nrCombined );

const numbers = [1,2,3,4,5,6];

const [one, two ,...rest] = numbers;
console.log(numbers +"\n")

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);

