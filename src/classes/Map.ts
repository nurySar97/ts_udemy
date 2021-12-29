import { User, Company } from '.';

class Map {
    private static isInitialized: boolean = false;
    private maps: typeof google.maps = google.maps;
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

    addMarker(mappable: User | Company){
        new this.maps.Marker({
            map: this.googleMap,
            position: mappable.location
        })   
    }
}

export default Map;