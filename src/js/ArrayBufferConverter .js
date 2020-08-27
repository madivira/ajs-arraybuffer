export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
    return this.buffer;
  }

  toString() {
    let arrayString = '';
    const buf16 = new Uint16Array(this.buffer);
    for (let i = 0; i < buf16.length; i += 1) {
      arrayString += String.fromCharCode(buf16[i]);
    }
    return arrayString;
  }
}
