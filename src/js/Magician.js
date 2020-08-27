import Daemon from './Daemon';

export default class Magician extends Daemon {
  constructor(...args) {
    super(...args);
    this.type = 'Magician';
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
