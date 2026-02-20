export class Car {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  start(): void {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}