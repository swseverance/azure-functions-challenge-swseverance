const { expect } = require('chai');
const { cipherToMap, splitMessage, decode } = require('./');

describe('cipherToMap', () => {
  it('takes in a cipher and returns a Map', () => {
    const cipher = { "a": 1, "b": 2 };
    const actual = cipherToMap(cipher);

    expect(actual.size).to.equal(2);
    expect(actual.get(1)).to.equal('a');
    expect(actual.get(2)).to.equal('b');
  });
});

describe('splitMessage', () => {
  it('splits a string two characters at a time', () => {
    const expected = ['34', '56'];
    const actual = splitMessage('3456');

    expect(actual).to.eql(expected);
  });

  it('handles strings of odd length as well', () => {
    const expected = ['34', '56', '7'];
    const actual = splitMessage('34567');

    expect(actual).to.eql(expected);
  });
});

describe('decode', () => {
  it('decodes an array of character pairs', () => {
    const arrCodes = [ '92', '13' ];
    const cipherMap = new Map([[ 92, 'h' ], [ 13, 'i' ]]);
    const expected = 'hi';
    const actual = decode(arrCodes, cipherMap);

    expect(actual).to.equal(expected);
  });
});
