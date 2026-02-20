export class Car {
  brand!: string;
  model!: string;

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