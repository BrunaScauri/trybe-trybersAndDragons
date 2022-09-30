import Race from './Race';

export default class Orc extends Race {
  public static createdInstances = 0;
  _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;

    Orc.createdInstances += 1;
  }

  static createdRacesInstances():number {
    return Orc.createdInstances;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}
