import HomeScreen from './screens/HomeScreen.js';
const router = () => {
  const main = document.getElementById('main-contaienr;');
  main.innerHTML = HomeScreen.render();
};
window.addEventListener('load', router);
