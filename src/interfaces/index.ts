export interface IMappable {
    location: {
        lat: number,
        lng: number
    };
    color: string;
    markerContent(): string;
}