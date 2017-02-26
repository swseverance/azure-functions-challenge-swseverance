const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');
chai.use(spies);

const sortArray2 = require('./');

describe('sortArray2', () => {
  it('responds to a request with an array of sorted values', () => {
    const context = {
      done: () => {}
    };

    const spy = chai.spy.on(context, 'done');

    const req = { key: "abc123" };
    const tableEntry = { ArrayOfValues: "[1,2,3]" };
    const expected = {
      key: "abc123",
      ArrayOfValues: [1, 2, 3]
    };

    sortArray2(context, req, tableEntry);

    expect(spy).to.have.been.called.with(null, expected);
  });
});
