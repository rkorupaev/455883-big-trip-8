import makePoint from './make-point.js';
import makeFilter from './make-filter.js';


console.log('test');


const filterContainer = document.querySelector(`.trip-filter`);

filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(test));




const dayItems = document.querySelector(`.trip-day__items`);

dayItems.insertAdjacentHTML(`beforeend`, makePoint);
