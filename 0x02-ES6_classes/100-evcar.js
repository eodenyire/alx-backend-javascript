import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar to return a Car object instead of EVCar
  cloneCar() {
    return new Car();  // Returns a Car object
  }
}
