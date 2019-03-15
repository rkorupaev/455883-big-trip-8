import makeFilter from './make-filter.js';
import {routePoints} from './route.js';

const filterContainer = document.querySelector(`.trip-filter`);
const filters = [`everything`, `future`, `past`];
filters.forEach((element) => {
  filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(element));
});

const dayItems = document.querySelector(`.trip-day__items`);
for (let i = 0; i < 7; i++) {
  dayItems.insertAdjacentHTML(`beforeend`, routePoints[i]);
}

filterContainer.addEventListener(`click`, () => {
  let tripPoints = document.querySelectorAll(`.trip-point`);
  tripPoints.forEach((element) => {
    element.remove();
  });
  for (let i = 0; i < (Math.random() * 5); i++) {
    dayItems.insertAdjacentHTML(`beforeend`, routePoints[i]);
  }
});
