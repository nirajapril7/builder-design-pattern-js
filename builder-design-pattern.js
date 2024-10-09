//Without the Builder Pattern
//Using Constructor with Many Parameters
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

//With the Builder Pattern
//Using the Builder Pattern
// Car class remains simple, no complex constructor
class Car {
  constructor(builder) {
    this.make = builder.make;
    this.model = builder.model;
    this.year = builder.year;
    this.color = builder.color;
    this.hasGPS = builder.hasGPS;
    this.hasSunroof = builder.hasSunroof;
  }

  describe() {
    return `${this.year} ${this.make} ${this.model} in ${this.color} color with GPS: ${this.hasGPS} and Sunroof: ${this.hasSunroof}`;
  }
}

// CarBuilder class for step-by-step object creation

class CarBuilder {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  addGPS() {
    this.hasGPS = true;
    return this;
  }

  addSunroof() {
    this.hasSunroof = true;
    return this;
  }

  build() {
    return new Car(this); // Builds and returns the Car object
  }
}

// Creating the object using the builder

const car = new CarBuilder('Tesla', 'Model S')
  .setYear(2024)
  .setColor('Red')
  .addGPS()
  .build();

console.log(car.describe());
