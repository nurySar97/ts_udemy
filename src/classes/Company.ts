import { getCoords } from './../utils';
import faker from 'faker'

class Company {
    companyName: string;
    catchPhrase: string;

    location: {
        lat: number,
        lng: number
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = getCoords();
    }
}

export default Company;