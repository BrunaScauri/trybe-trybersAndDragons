import Race from './Race';

export default class Elf extends Race {
  public static createdInstances = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;

    Elf.createdInstances += 1;
  }

  static createdRacesInstances():number {
    return Elf.createdInstances;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}
