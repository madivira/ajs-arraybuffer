import ArrayBufferConverter from '../ArrayBufferConverter ';
import getBuffer from '../getBuffer';

test('test arraybuffer', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load(getBuffer());
  expect(buffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
test('test arraybuffer 2', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load([]);
  expect(buffer.toString()).toBe('');
});
