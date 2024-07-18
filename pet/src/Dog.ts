import VirtualPet from './index';

export default class Dog extends VirtualPet {
    constructor(name: string) {
        super(name);
    }

    play(): void {
        this.happiness += 15;
        if (this.happiness > 100) {
            this.happiness = 100;
        }
    }
}