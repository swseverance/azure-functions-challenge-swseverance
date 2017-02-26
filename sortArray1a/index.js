const createTableEntry = require('./helpers');

module.exports = (context, item) => {
  // process item (sort ArrayOfValues) and store in a table
  context.bindings.outputTable = createTableEntry(item);

  context.done();
};
