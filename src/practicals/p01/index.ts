import { Car } from "./car";

const car = new Car();

car.brand = "Toyota";
car.model = "Camry";

car.start();
// Toyota Camry is starting...
car.accelerate();
// Toyota Camry is accelerating...
car.brake();
// Toyota Camry is braking...
car.stop();
// Toyota Camry is stopping...
