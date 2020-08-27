import Character from './Character';

export default class Daemon extends Character {
  constructor(...args) {
    super(...args);
    this.type = 'Daemon';
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }

  get stoned() {
    return this.attackStoned;
  }

  set stoned(bool) {
    this.attackStoned = bool;
  }

  get attackDistance() {
    return this.attackNew;
  }

  set attackDistance(distance) {
    if (distance > 1) {
      this.attackNew = Math.trunc(this.attack * (1 - (distance - 1) / 10));
    } else {
      this.attackNew = this.attack;
    }
    if (this.attackStoned) {
      this.attackNew = Math.trunc(this.attack - Math.log2(distance) * 5);
    }
    if (this.attackNew <= 0) {
      this.attackNew = 0;
    }
  }
}
