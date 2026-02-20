import { Character } from "./character";

export class Warrior extends Character {
    private weapon: string;

    constructor(name: string, weapon: string, health: number = 100) {
        super(name, health);
        this.weapon = weapon;
    }

    getWeapon(): string {
        return this.weapon;
    }

    receiveDamage(damage: number): void {

        const reducedDamage = damage * 0.9;


        super.receiveDamage(reducedDamage);
    }
}