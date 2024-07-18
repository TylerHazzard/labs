import VirtualPet from './index';

export default class Cat extends VirtualPet {
    color: string;

    constructor(name: string, color: string = 'black') {
        super(name);
        this.color = color;
    }

    getAttitude(): string {
        const satisfaction = this.getSatisfaction();
        if (satisfaction > 0) {
            return 'inquisitive';
        } else {
            return 'grumpy';
        }
    }

    describe(): string {
        const attitude = this.getAttitude();
        return this.name + " " +this.hunger + " " + this.happiness + " " + this.color + " " + attitude;
    }
}