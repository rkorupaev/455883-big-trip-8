class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  createElement(template) {
    const newElement = document.createElement(`article`);
    newElement.innerHTML = template;
    return newElement;
  }

  render(container) {}


}
