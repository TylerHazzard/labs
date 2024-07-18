import Dog from '../src/Dog';

describe('Dog Class Tests', () => {

    it('should inherit name, hunger, and happiness from VirtualPet', () => {
        const dog = new Dog("Buddy")
        expect(dog.name).toBe('Buddy');
        expect(dog.hunger).toBe(50);
        expect(dog.happiness).toBe(50);
    });

    it('play method should increase happiness by 15', () => {
        const dog = new Dog("Finn")
        dog.play();
        expect(dog.happiness).toBe(65);
    });

    it('play method should not increase happiness past 100', () => {
        const dog = new Dog("Sam")
        dog.happiness = 100;
        dog.play();
        expect(dog.happiness).toBe(100);
    });
});