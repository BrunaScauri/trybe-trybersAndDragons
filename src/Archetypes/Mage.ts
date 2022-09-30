import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  public static createdInstances = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.createdInstances += 1;
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Mage.createdInstances;
  }
}