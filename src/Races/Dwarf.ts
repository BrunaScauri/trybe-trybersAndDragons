import Race from './Race';

export default class Dwarf extends Race {
  public static createdInstances = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;

    Dwarf.createdInstances += 1;
  }

  static createdRacesInstances():number {
    return Dwarf.createdInstances;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}
