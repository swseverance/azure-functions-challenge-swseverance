const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');
chai.use(spies);

const decipherText = require('./');

describe('decipherText', () => {
  it('sends a deciphered message', () => {
    const context = {
      done: () => {}
    };

    const spy = chai.spy.on(context, 'done');

    const input = {
      "key": "2588",
      "msg": "739383",
      "cipher": { "b": 73, "e": 83, "y": 93 }
    };

    const expected = {
      "key": "2588",
      "result": "bye"
    };

    decipherText(context, input);

    expect(spy).to.have.been.called.with(null, expected);
  });
});
