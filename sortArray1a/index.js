const createTableEntry = require('./helpers');

module.exports = (context, item) => {
  const tableEntry = createTableEntry(item);

  context.bindings.outputTable = [ tableEntry ];

  context.done();
};
