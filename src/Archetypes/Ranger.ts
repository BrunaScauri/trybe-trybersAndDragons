import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  public static createdInstances = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.createdInstances += 1;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances():number {
    return Ranger.createdInstances;
  }
}