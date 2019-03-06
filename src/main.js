import makePoint from './make-point.js';
import makeFilter from './make-filter.js';

const filterContainer = document.querySelector(`.trip-filter`);
const filters = [`everything`, `future`, `past`];
filters.forEach(function(element) {
  filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(element));
});

const dayItems = document.querySelector(`.trip-day__items`);
for (let i = 0; i < 7; i++) {
  dayItems.insertAdjacentHTML(`beforeend`, makePoint());
};


