// Classes

class Car{
    constructor(name){
        this.brand = name;
    }
    carType(){
        return "My car is a " + this.brand;
        
    }

}

// Class Inheritance
class Model extends Car{
    constructor(name, mod){
        super(name);
        this.model = mod;
    }
    show(){
        return this.carType() + ', the brand is ' + this.model + '!';
    }
}

const mycar = new Model('Ford', 'Mustang');
console.log(mycar.show());