const createTableEntry = require('./helpers');

module.exports = (context, item) => {
  const tableEntry = createTableEntry(item);

  context.bindings.outputTable.push(tableEntry);

  context.done();
};
