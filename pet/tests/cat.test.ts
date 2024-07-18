import Cat from '../src/cat';

describe('Cat Class Tests', () => {

    it('should inherit name, hunger, and happiness from VirtualPet', () => {
        const cat = new Cat('Whiskers', 'gray');
        expect(cat.name).toBe('Whiskers');
        expect(cat.hunger).toBe(50);
        expect(cat.happiness).toBe(50);
    });

    it('getAttitude should return "inquisitive" for positive satisfaction', () => {
        const cat = new Cat('troy', 'orange');
        cat.play();
        expect(cat.getAttitude()).toBe('inquisitive');
    });

    it('getAttitude should return "grumpy" for zero or negative satisfaction', () => {
        const cat = new Cat('kurt', 'yellow');
        expect(cat.getAttitude()).toBe('grumpy');
    });

    it('describe should return string with name, hunger, happiness, color, and attitude', () => {
        const cat = new Cat('bob', 'red');
        expect(cat.describe()).toBe('bob 50 50 red grumpy');
    });
});