import './style.css';
import { Map } from './classes';
import { User, Company } from './classes';

const user = new User();
const company = new Company();
const customMap = new Map('map');

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);