import makePoint from './make-point.js';
import makeFilter from './make-filter.js';
import data from './point.js';

const filterContainer = document.querySelector(`.trip-filter`);
const filters = [`everything`, `future`, `past`];
filters.forEach((element) => {
  filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(element));
});

const dayItems = document.querySelector(`.trip-day__items`);
for (let i = 0; i < 7; i++) {
  dayItems.insertAdjacentHTML(`beforeend`, makePoint());
};



filterContainer.addEventListener(`click`, (evt) => {
  let tripPoints = document.querySelectorAll(`.trip-point`);
  tripPoints.forEach((element) => {
    element.remove();
  });
  for (let i = 0; i < (Math.random() * 5); i++){
    dayItems.insertAdjacentHTML(`beforeend`, makePoint());
  };
});


console.log(data);
