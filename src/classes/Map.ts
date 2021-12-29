import { User, Company } from '.';
import { getCoords } from '../utils';

class Map {
    private static isInitialized: boolean = false;
    private googleMap: google.maps.Map;

    constructor(id: string) {
        if (Map.isInitialized) {
            console.error('Map already has been displayed, invoke Map second time forbidden!')
        } else {
            Map.isInitialized = true
            this.googleMap = new google.maps.Map(document.getElementById(id), {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            })
        }
    }

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: user.location
        })
    };

    addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: company.location
        })
    }
}

export default Map;