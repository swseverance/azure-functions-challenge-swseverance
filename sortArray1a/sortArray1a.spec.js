const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');
chai.use(spies);

const sortArray1a = require('./');

describe('sortArray1a', () => {
  it('reads an item from the queue, sorts the values, and stores the result', () => {
    const context = {
      done: () => {},
      bindings: {
        outputTable: null
      }
    };

    const item = { "key": "ab12", "ArrayOfValues": [ 92, 1, 103] };

    const spy = chai.spy.on(context, 'done');

    const expected = {
      PartitionKey: 'Test',
      RowKey: 'ab12',
      ArrayOfValues: "[1,92,103]"
    };

    sortArray1a(context, item);

    const actual = context.bindings.outputTable;

    expect(actual).to.eql(expected);

    expect(spy).to.have.been.called();
  });
});
