import './style.css';
import { Map } from './classes';
import { User } from './classes';

const user = new User();
const customMap = new Map('map');

customMap.addUserMarker(user);