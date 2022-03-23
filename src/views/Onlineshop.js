// const Navbar = require('../components/Navbar');
import bodyParser from 'body-parser';
import {Navbar} from '../components/Navbar';

export const Onlineshop = () => {
    let html = `
        ${Navbar()}
    `;

    document.body.insertAdjacentHTML('afterbegin', html);
}