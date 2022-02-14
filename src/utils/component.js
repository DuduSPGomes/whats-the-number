document.componentRegistry = {};
document.nextId = 0;

class Component {
  constructor() {
    this._id = ++document.nextId;
    document.componentRegistry[this._id] = this;
  }
}

export default Component;
