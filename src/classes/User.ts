import faker from 'faker'
import { getCoords } from '../utils';

class User {
    name: string;
    location: {
        lat: number,
        lng: number
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = getCoords();
    }
}

export default User;