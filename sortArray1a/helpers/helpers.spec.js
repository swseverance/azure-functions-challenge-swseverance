const chai = require('chai');
const { expect } = chai;
const spies = require('chai-spies');
chai.use(spies);

const createTableEntry = require('./');

describe('createTableEntry', () => {
  it('reads an item from the queue, sorts the values, and stores the result', () => {
    const input = { "key": "ab12", "ArrayOfValues": [ 92, 1, 103] };

    const expected = {
      PartitionKey: 'Test',
      RowKey: 'ab12',
      ArrayOfValues: '1,92,103'
    };

    const actual = createTableEntry(input);

    expect(actual).to.eql(expected);
  });
});
