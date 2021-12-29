import faker from 'faker'
import { IMappable } from './../interfaces';
import { getCoords } from '../utils';

class User implements IMappable {
    name: string;
    location: { lat: number, lng: number };
    color: string;

    constructor(color: string = 'lightblue') {
        this.name = faker.name.firstName();
        this.location = getCoords();
        this.color = color;
    }

    markerContent(): string {
        return `
            <div>
                <p style='color: ${this.color};'>User name: ${this.name}</p>
            </div>
            `
    }
}

export default User;