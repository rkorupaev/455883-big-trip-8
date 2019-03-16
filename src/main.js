import makeFilter from './make-filter.js';
import {routePoints} from './route.js';
import {point} from './point.js';
import {Point} from './class-point.js';

const filterContainer = document.querySelector(`.trip-filter`);
const filters = [`everything`, `future`, `past`];
filters.forEach((element) => {
  filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(element));
});

const dayItems = document.querySelector(`.trip-day__items`);
const firstItem = new Point(point);
const secondItem = new Point(point);
firstItem.render(dayItems);
secondItem.render(dayItems);

filterContainer.addEventListener(`click`, () => {
  let tripPoints = document.querySelectorAll(`.trip-point`);
  tripPoints.forEach((element) => {
    element.remove();
  });
  for (let i = 0; i < (Math.random() * 5); i++) {
    dayItems.insertAdjacentHTML(`beforeend`, routePoints[i]);
  }
});
