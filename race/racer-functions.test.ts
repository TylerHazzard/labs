import { findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer } from "./racer-functions";
import SolarCar from "./solarcar";
import GasCar from "./gascar";
import Racer from "./racer";

describe("findRacersWithEmptyFuel", () => {
  it("returns racers with empty fuel", () => {
    const racers = [
      new GasCar("Gas 1", 0),
      new GasCar("Gas 2", 1),
      new GasCar("Gas 3", 2)
    ];
    const result = findRacersWithEmptyFuel(racers);
    expect(result).toHaveLength(1);
    expect(result[0].team).toBe("Gas 1");
  });

  it("returns racers with empty fuel", () => {
    const racers = [
      new GasCar("Gas 1", 0),
      new GasCar("Gas 2", 0),
      new GasCar("Gas 3", 0)
    ];
    const result = findRacersWithEmptyFuel(racers);
    expect(result).toHaveLength(3);
  });

  it("returns empty array when no racers have empty fuel", () => {
    const racers = [
      new GasCar("Gas 1", 1),
      new GasCar("Gas 2", 3),
      new GasCar("Gas 3", 2)
    ];
    const result = findRacersWithEmptyFuel(racers);
    expect(result).toHaveLength(0);
  });

  it("returns empty array when all racers are SolarCar instances",  () => {
    const racers = [
      new SolarCar("Solar 1"),
      new SolarCar("Solar 2"),
      new SolarCar("Solar 3")
    ];
    const result = findRacersWithEmptyFuel(racers);
    expect(result).toHaveLength(0);
  });

  it("returns racers with empty fuel for mixed array of SolarCar and GasCar instances", () => {
    const racers = [
      new SolarCar("Solar 1"),
      new GasCar("Gas 1", 0),
      new GasCar("Gas 2", 2),
      new SolarCar("Solar 2")
    ];
    const result = findRacersWithEmptyFuel(racers);
    expect(result).toHaveLength(1);
    expect(result[0].team).toBe("Gas 1");
  });

  it("returns empty array for an empty input array", () => {
    const racers: Racer[] = [];
    const result = findRacersWithEmptyFuel(racers);
    expect(result).toHaveLength(0);
  });
});

describe("findAverageSpeed", () => {
  it("calculates average speed for GasCar instances with different speeds", () => {
    const racers = [
      new GasCar("Gas 1", 3),
      new GasCar("Gas 2", 2),
      new GasCar("Gas 3", 4)
    ];
    const result = findAverageSpeed(racers);
    expect(result).toBe(3);
  });

  it("calculates average speed for mixed array of SolarCar and GasCar instances with different speeds", () => {
    const racers = [
      new SolarCar("Solar 1"),
      new GasCar("Gas 1", 4),
      new SolarCar("Solar 2"),
      new GasCar("Gas 2", 6)
    ];
    const result = findAverageSpeed(racers);
    expect(result).toBeCloseTo(5.0, 1); // Approximately 5.0, with precision up to 1 decimal place
  });

  it("returns 0 for an array of cars that all have 0 speed", () => {
    const racers = [
      new GasCar("Gas 1", 0),
      new SolarCar("Solar 1"),
      new GasCar("Gas 2", 0),
      new SolarCar("Solar 2")
    ];
    const result = findAverageSpeed(racers);
    expect(result).toBe(0);
  });

  it("returns 0 for an empty input array", () => {
    const racers: Racer[] = [];
    const result = findAverageSpeed(racers);
    expect(result).toBe(0);
  });
});

describe("getFasterRacer", () => {
    it("returns racerA when racerA is faster", () => {
        const racerA = new GasCar("Gas 1", 5);
        const racerB = new SolarCar("Solar 1");
        const result = getFasterRacer(racerA, racerB);
        expect(result).toBe(racerA);
        });
      
        it("returns racerB when racerB is faster", () => {
          const racerA = new SolarCar("Solar 1");
          const racerB = new GasCar("Gas 1", 7);
          const result = getFasterRacer(racerA, racerB);
          expect(result).toBe(racerB);
        });
      
        it("returns null when both racers have the same speed", () => {
          const racerA = new GasCar("Gas 1", 3);
          const racerB = new SolarCar("Solar 1");
          const result = getFasterRacer(racerA, racerB);
          expect(result).toBeNull();
        });
      
        it("handles different types of racers correctly", () => {
      const racerA = new GasCar("Gas 1", 4);
      const racerB = new SolarCar("Solar 1");
      const result = getFasterRacer(racerA, racerB);
      expect(result).toBe(racerA);
    });
});
      

