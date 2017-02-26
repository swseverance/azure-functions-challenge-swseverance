const createTableEntry = require('./helpers');

module.exports = (context, item) => {
  context.bindings.outputTable = createTableEntry(item);

  context.done();
};
