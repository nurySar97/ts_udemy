import { getCoords } from './../utils';
import { IMappable } from './../interfaces';
import faker from 'faker'


class Company implements IMappable {
    companyName: string;
    catchPhrase: string;
    color: string;

    location: { lat: number; lng: number; };

    constructor(color:string = 'darkblue') {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = getCoords();
        this.color = color;
    }

    markerContent(): string {
        return `
            <div>
                <h3>Company name: ${this.companyName}</h3>
                <p style='color: ${this.color};'>Catch Phrase ${this.catchPhrase}</p>
            </div>
            `
    }
}

export default Company;