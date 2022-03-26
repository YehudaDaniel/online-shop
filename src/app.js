import {Onlineshop} from './views/Onlineshop';

//import all the styles here in order to load them automatically(without <link> tags in <head>)
import '../public/styles/index.scss';

function init() {
    Onlineshop();
}

window.addEventListener('load', init);