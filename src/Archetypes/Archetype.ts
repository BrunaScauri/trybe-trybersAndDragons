import { EnergyType } from '../Energy';

export default abstract class Archetype {
  // private _name: string;
  private readonly _special: number;
  private readonly _cost: number;

  constructor(private readonly _name: string) {
    // this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name():string {
    return this._name;
  }

  get special():number {
    return this._special;
  }

  get cost():number {
    return this._cost;
  }

  abstract get energyType(): EnergyType;

  public static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }
}