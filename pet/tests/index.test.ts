import VertualPet from '../src/index';

describe('describe', () => {
    it("properly displays the pet status", () => {
        const pet = new VertualPet("Ron");
        expect(pet.describe()).toEqual('Ron 50 50');
    });

    it("properly displays the pet status", () => {
        const pet = new VertualPet("Ron", 20, 80);
        expect(pet.describe()).toEqual('Ron 20 80');
    });
});

describe('getSatisfaction', () => {
    it("properly returns the satisfaction", () => {
        const pet = new VertualPet("Ted", 20, 60)
        expect(pet.getSatisfaction()).toBe(40)
    })

    it("properly returns the satisfaction", () => {
        const pet = new VertualPet("Ted", 60, 90)
        expect(pet.getSatisfaction()).toBe(30)
    })
})

describe('makeSound', () => {
    it("properly returns the correct string", () => {
        const pet = new VertualPet("trent", 30, 100)
        expect(pet.makeSound("ruff ruff")).toBe("trent says ruff ruff")
    })

    it("properly returns the correct string", () => {
        const pet = new VertualPet("trent", 30, 100)
        expect(pet.makeSound("meow")).toBe("trent says meow")
    })
})

describe('feed', () => {
    it("subtracts 10 points from hunger", () => {
        const pet = new VertualPet("pippin", 60, 20)
        pet.feed();
        expect(pet.hunger).toBe(50)
    })

    it("wont go below 0", () => {
        const pet = new VertualPet("pippin", 0, 20)
        pet.feed();
        expect(pet.hunger).toBe(0)
    })
})

describe('play', () => {
    
    it('improves happiness by 10', () => {
        const pet = new VertualPet("Theo", 20, 50)
        pet.play();
        expect(pet.happiness).toBe(60);
    });

    it('should not exceed 100', () => {
        const pet = new VertualPet("Theo", 20, 100)
        pet.play();
        expect(pet.happiness).toBe(100);
    });
})