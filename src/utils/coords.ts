import faker from 'faker';

interface ICoords {
    lat: number,
    lng: number
}

export const getCoords = (): ICoords => {
    return {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())
    }
}