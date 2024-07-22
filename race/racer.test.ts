import SolarCar from "./solarcar";
import GasCar from "./gascar";

describe("SolarCar", () => {
  it("accelerate increases speed by 1", () => {
    const car = new SolarCar("Team Solar");
    car.accelerate();
    expect(car.speed).toBe(1);
  });

  it("calling accelerate twice increases speed to 2", () => {
    const car = new SolarCar("Team Solar");
    car.accelerate();
    car.accelerate();
    expect(car.speed).toBe(2);
  });

  it("the speed property starts at 0.", () => {
    const car = new SolarCar("Team Solar");
    expect(car.speed).toBe(0);
  });

  it("isFuelEmpty always returns false", () => {
    const car = new SolarCar("Team Solar");
    expect(car.isFuelEmpty()).toBe(false);
  });

  it("constructor sets team property", () => {
    const car = new SolarCar("Team Solar");
    expect(car.team).toBe("Team Solar");
  });
});

describe("GasCar", () => {
  it("accelerate increases speed by 2 and decreases fuel by 1", () => {
    const car = new GasCar("Team Gas", 5);
    car.accelerate();
    expect(car.speed).toBe(2);
    expect(car.fuel).toBe(4);
  });

  it("when called twice accelerate increases speed by 4 and decreases fuel by 2", () => {
    const car = new GasCar("Team Gas", 5);
    car.accelerate();
    car.accelerate();
    expect(car.speed).toBe(4);
    expect(car.fuel).toBe(3);
  });

  it("isFuelEmpty returns true when fuel is 0", () => {
    const car = new GasCar("Team Gas", 0);
    expect(car.isFuelEmpty()).toBe(true);
  });

  it("isFuelEmpty returns false when fuel is greater than 0", () => {
    const car = new GasCar("Team Gas", 1);
    expect(car.isFuelEmpty()).toBe(false);
  });

  it("constructor sets team and fuel properties", () => {
    const car = new GasCar("Team Gas", 5);
    expect(car.team).toBe("Team Gas");
    expect(car.fuel).toBe(5);
  });

  it("fuel defaults to 10 if not provided", () => {
    const car = new GasCar("Team Gas");
    expect(car.fuel).toBe(10);
  });
});
