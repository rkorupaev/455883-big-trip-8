import makePoint from './src/first-module.js';


const dayItems = document.querySelector(`.trip-day__items`);

dayItems.insertAdjacentHTML(`beforeend`, makePoint);
