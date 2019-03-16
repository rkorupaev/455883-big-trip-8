export class Point {
  constructor(data) {
    this._town = data.town;
    this._photo = data.photo;
    this._icon = data.icon;
    this._title = data.title;
    this._time = data.time;
    this._price = data.price;
    this._offer = data.offer;

    this._element = null;
  }

  get template() {
    return `
        <article class="trip-point">
          <i class="trip-icon">🚕</i>
          <h3 class="trip-point__title">${this._title}</h3>
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${this._time.timetable}</span>
            <span class="trip-point__duration">${this._time.duration}</span>
          </p>
          <p class="trip-point__price">${this._price}</p>
          <ul class="trip-point__offers">
            ${this._offer}
          </ul>
        </article>`.trim();
  }

  createElement(template) {
    const newElement = document.createElement(`article`);
    newElement.innerHTML = template;
    return newElement;
  }

  render(container) {
    this._element = this.createElement(this.template);
    container.appendChild(this._element);
  }
};
