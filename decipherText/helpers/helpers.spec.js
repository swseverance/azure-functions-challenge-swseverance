const { expect } = require('chai');
const { cipherToMap } = require('./');

describe('cipherToMap', () => {
  it('takes in a cipher and returns a Map', () => {
    const cipher = { "a": 1, "b": 2 };
    const expected = new Map([[1, "a"], [2, "b"]]);
    const actual = cipherToMap(cipher);

    expect(actual.size).to.equal(2);
    expect(actual.get(1)).to.equal('a');
    expect(actual.get(2)).to.equal('b');
  });
});
