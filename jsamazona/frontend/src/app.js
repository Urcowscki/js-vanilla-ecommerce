import Error404Screen from './screens/Error404Screen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { parseRequestUrl } from './utils.js';
const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
};
const router = () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${verb}` : '');
  const screen = routes[parse] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById('main-container');
  main.innerHTML = screen.render();
};
window.addEventListener('load', router);
window.addEventListener('hashchnage', router);
