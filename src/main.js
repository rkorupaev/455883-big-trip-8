import makeFilter from './make-filter.js';
import {routePoints} from './route.js';
import {point} from './point.js';
import {Point} from './class-point.js';
import {PointOpened} from './class-point-opened.js';

const filterContainer = document.querySelector(`.trip-filter`);
const filters = [`everything`, `future`, `past`];
filters.forEach((element) => {
  filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(element));
});

const dayItems = document.querySelector(`.trip-day__items`);
const firstItem = new Point(point);
const openedItem = new PointOpened(point);

firstItem.onClick = (evt) => {
  evt.target.parentNode.remove();
  openedItem.render(dayItems);
};

firstItem.render(dayItems);

openedItem.onSubmit = (evt, newObject) =>{
  point.title = newObject.title;
  point.town = newObject.town;
  point.price = newObject.price;
  point.time.timetable = newObject.time;

  // console.log(newObject);
  // console.log(point);

  firstItem.update(point);

  evt.target.parentNode.remove();
  firstItem.render(dayItems);
  // console.log(firstItem);
};

openedItem.onReset = (evt) =>{
  evt.preventDefault();
  evt.target.parentNode.remove();
  firstItem.render(dayItems);
};

// filterContainer.addEventListener(`click`, () => {
//   let tripPoints = document.querySelectorAll(`.trip-point`);
//   tripPoints.forEach((element) => {
//     element.remove();
//   });
//   for (let i = 0; i < (Math.random() * 5); i++) {
//     dayItems.insertAdjacentHTML(`beforeend`, routePoints[i]);
//   }
// });
