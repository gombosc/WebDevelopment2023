//Evaluate these:
//#1
[2] === [2] `false`
{} === {} `false`

//#2 what is the value of property a for each object.
const object1 = { a: 5 };   //4
const object2 = object1;  //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4; 


//#3 create two classes: an Animal class and a Mamal class. 

class Animal {
    constructor(name, type, color1){
        this.animalType = name;
        this.color1 = color1;
        this.type = type;
    }
    sound(){
        console.log(`MOOO! I'm a ${name} and I'm ${color1}! I'm pretty ${type}!`);
    }
}

let lion = new Animal('lion', 'yellow', 'aggresive');
console.log(lion)
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 


