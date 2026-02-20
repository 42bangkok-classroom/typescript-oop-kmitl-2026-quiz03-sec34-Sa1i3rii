export class Car {
  brand!: string;
  model!: string;

  constructor(brand?: string, model?: string) {
    if (brand) this.brand = brand;
    if (model) this.model = model;
  }

  start(): void {
    console.log(`${this.brand} ${this.model} is starting...`);
  }

  accelerate(): void {
    console.log(`${this.brand} ${this.model} is accelerating...`);
  }

  brake(): void {
    console.log(`${this.brand} ${this.model} is braking...`);
  }

  stop(): void {
    console.log(`${this.brand} ${this.model} is stopping...`);
  }
}