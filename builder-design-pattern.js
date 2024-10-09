Without the Builder Pattern
1). Using Constructor with Many Parameters
class Car {
  constructor(make, model, year, color, hasGPS, hasSunroof) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.hasGPS = hasGPS || false;     // Optional parameter
    this.hasSunroof = hasSunroof || false; // Optional parameter
  }

  describe() {
    return `${this.year} ${this.make} ${this.model} in ${this.color} color with GPS: ${this.hasGPS} and Sunroof: ${this.hasSunroof}`;
  }
}

// Creating the object
const car = new Car('Tesla', 'Model S', 2024, 'Red', true, false);
console.log(car.describe());
