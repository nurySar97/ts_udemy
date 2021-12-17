class Vehicle {
    name: string
    constructor(name: string) {
        this.name = name
    }

    drive(): void {
        console.log(`${this.name} is driving!`)
    }

    stop(): void {
        console.log(`${this.name} has stopped!`)
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log(`I\'m ${this.name}. I\'m driving!`)
    }
}

const vehicle = new Vehicle('vehicle');

vehicle.drive();
vehicle.stop();

const car = new Car('car');
car.drive();
car.stop();
