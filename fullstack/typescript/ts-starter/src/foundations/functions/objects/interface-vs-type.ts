export {};

// Example 1: interface
interface Car {
  make: string;
  model: string;
}

const car1: Car = { make: "Tesla", model: "X" };

// Example 2: type alias
type Bike = {
  make: string;
  gears: number;
};

const bike1: Bike = { make: "Yamaha", gears: 5 };

// Example 3: extending interface
interface ElectricCar extends Car {
  batteryRange: number;
}

const ecar: ElectricCar = {
  make: "Tesla",
  model: "3",
  batteryRange: 400,
};

// Example 4: intersection type
type MotorBike = Bike & { hasABS: boolean };

const mb: MotorBike = { make: "Honda", gears: 6, hasABS: true };