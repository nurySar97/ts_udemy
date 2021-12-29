import './style.css';
import { Map } from './classes';
import { User, Company } from './classes';

const user = new User('green');
const company = new Company('blue');
const customMap = new Map('map');

customMap.addMarker(user);
customMap.addMarker(company);