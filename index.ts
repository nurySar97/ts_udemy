class Vehicle {
    // color: string = '#ff0000';

    // constructor(name: string, color?: string) {
    //     this.name = name;
    //     this.color = color;
    // }

    constructor(public name: string, public color?: string) { }

    public stop(): void {
        console.log(`${this.name} has stopped!`)
    }

    // public drive(): void {
    //     console.log(`${this.name} is driving!`)
    // }

    protected beep(): void {
        console.log('Beeep!')
    }

    showColor(): void {
        console.log(this.name + ': ' + this.color)
    }
}

class Car extends Vehicle {

    constructor(public name: string, public color?: string, public wheels?: number) {
        super(name, color);
    }

    private drive(): void {
        console.log(`I\'m ${this.name}. I\'m driving!`)
    }

    startDrivingProcess(): void {
        this.drive()
        this.beep()
    }
}

// vehicle
const vehicle = new Vehicle('Vehicle', '#ff0000');
vehicle.showColor()
vehicle.stop();

// car
const car = new Car('Car', '#00ff00', 4);

car.startDrivingProcess();
car.stop();
car.showColor();