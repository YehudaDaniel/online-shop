import {Navbar} from '../components/Navbar';

export const Onlineshop = () => {
    let html = `
        ${Navbar()}
    `;

    document.body.insertAdjacentHTML('afterbegin', html);
}