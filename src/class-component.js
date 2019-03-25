export class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }

    this._element = null;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  createElement(template) {
    const newElement = document.createElement(`article`);
    newElement.innerHTML = template;
    return newElement;
  }

  bind() {};

  render(container) {
    this._element = this.createElement(this.template);
    container.appendChild(this._element);
    this.bind();
  }
};
