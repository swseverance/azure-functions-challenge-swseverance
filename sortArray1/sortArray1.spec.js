const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');
chai.use(spies);

const sortArray1 = require('./');

describe('sortArray1', () => {
  it('sends an empty response', () => {
    const context = {
      done: () => {}
    };

    const spy = chai.spy.on(context, 'done');

    const input = { "key": "ab12", "ArrayOfValues": [ 92, 1, 103] };

    sortArray1(context, input);

    expect(spy).to.have.been.called.with(null, {});
  });

  it('adds the request body to a queue for subsequent sorting and storage', () => {
    const context = {
      done: () => {},
      sortArrayQueueItem: null
    };

    const input = { "key": "ab12", "ArrayOfValues": [ 92, 1, 103] };

    sortArray1(context, input);

    expect(context.sortArrayQueueItem).to.equal(input);
  });
});
