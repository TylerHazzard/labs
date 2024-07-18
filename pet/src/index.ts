export default class VertualPet {
    public name: string;
    public hunger: number;
    public happiness: number;

    constructor(name: string, defaultHunger: number = 50, defaultHappiness: number = 50) {
        this.name = name;
        this.hunger = defaultHunger;
        this.happiness = defaultHappiness;
    }

    describe(): string {
        return this.name + " " +this.hunger + " " + this.happiness;
    }

    getSatisfaction(): number {
       return this.happiness - this.hunger;
    }

    makeSound( ​​sound: string ): string {
         return this.name + " says " + sound;
    }

    feed(): void {
        this.hunger -= 10;
        if (this.hunger < 0) {
            this.hunger = 0;
        }
    }

    play(): void {
        this.happiness += 10;
        if (this.happiness > 100) {
            this.happiness = 100;
        }
    }
}
