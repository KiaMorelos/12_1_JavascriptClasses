class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep"
    }
    toString(){
       return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
       super(make, model, year);
       this.numWheels = 4;
    }
}

class Motorcyle extends Vehicle {
    constructor(make, model, year){
       super(make, model, year);
       this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!"
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = []
        this.capacity = capacity
    }

    add(vehicle) {
        if(!(vehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!"
        }
        if(this.vehicles.length === this.capacity){
            return "Sorry, we're full"
        } else {
            this.vehicles.push(vehicle)
            console.log(this.vehicles)
            return "Vehicle added!"
        }
    }
}


