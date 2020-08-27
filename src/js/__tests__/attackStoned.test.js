import Daemon from '../Daemon';
import Magician from '../Magician';

describe('test attack Daemon', () => {
  const daemon = new Daemon('man', 'Daemon');
  test('test attack 1', () => {
    daemon.attackDistance = 1;
    expect(daemon.attackDistance).toBe(25);
  });
  test('test attack 5', () => {
    daemon.attackDistance = 5;
    expect(daemon.attackDistance).toBe(15);
  });
  test('test attack 10', () => {
    daemon.attackDistance = 10;
    expect(daemon.attackDistance).toBe(2);
  });
  test('test attack 11', () => {
    daemon.attackDistance = 11;
    expect(daemon.attackDistance).toBe(0);
  });
  test('test stoned', () => {
    expect(daemon.stoned).toBeFalsy();
  });
});
describe('test attack Magician', () => {
  const magician = new Magician('some', 'Magician');
  test('test attack 1', () => {
    magician.attackDistance = 1;
    expect(magician.attackDistance).toBe(10);
  });
  test('test attack 5', () => {
    magician.attackDistance = 5;
    expect(magician.attackDistance).toBe(6);
  });
  test('test attack 10', () => {
    magician.attackDistance = 10;
    expect(magician.attackDistance).toBe(0);
  });
  test('test attack 11', () => {
    magician.attackDistance = 11;
    expect(magician.attackDistance).toBe(0);
  });
});
describe('test attack with stoned Daemon', () => {
  const daemon = new Daemon('man', 'Daemon');
  daemon.stoned = true;
  test('test attack 1 stoned', () => {
    daemon.attackDistance = 1;
    expect(daemon.attackDistance).toBe(25);
  });
  test('test attack 5 stoned', () => {
    daemon.attackDistance = 5;
    expect(daemon.attackDistance).toBe(13);
  });
  test('test attack 10 stoned', () => {
    daemon.attackDistance = 10;
    expect(daemon.attackDistance).toBe(8);
  });
  test('test attack 11 stoned', () => {
    daemon.attackDistance = 11;
    expect(daemon.attackDistance).toBe(7);
  });
  test('test stoned', () => {
    expect(daemon.stoned).toBeTruthy();
  });
});

describe('test attack with stoned Magician', () => {
  const magician = new Magician('man', 'Magician');
  magician.stoned = true;
  test('test attack 1', () => {
    magician.attackDistance = 1;
    expect(magician.attackDistance).toBe(10);
  });
  test('test attack 5', () => {
    magician.attackDistance = 5;
    expect(magician.attackDistance).toBe(0);
  });
  test('test attack 10', () => {
    magician.attackDistance = 10;
    expect(magician.attackDistance).toBe(0);
  });
  test('test attack 11', () => {
    magician.attackDistance = 11;
    expect(magician.attackDistance).toBe(0);
  });
});
