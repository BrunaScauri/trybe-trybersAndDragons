import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Fighter, { SimpleFighter } from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _archetype: Archetype;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _lifePoints: number;
  private _maxLifePoints: number;
  private _name: string;
  private _race: Race;
  private _strength: number;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get archetype() { 
    return this._archetype; 
  }

  get defense() { 
    return this._defense; 
  }

  get dexterity() { 
    return this._dexterity; 
  }

  get energy() { 
    return { ...this._energy }; 
  }

  get lifePoints() { 
    return this._lifePoints; 
  }

  get name() { 
    return this._name; 
  }

  get race() { 
    return this._race; 
  }

  get strength() { 
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) this._lifePoints -= damage;

    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._race.maxLifePoints < this._maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const specialAttack = this._strength + 10;
    enemy.receiveDamage(specialAttack);
  }
}