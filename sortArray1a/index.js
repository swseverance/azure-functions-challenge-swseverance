module.exports = (context, item) => {
  const { key, ArrayOfValues } = item;
  const sorted = ArrayOfValues.sort((x, y) => x - y);

  context.bindings.outputTable = {
    PartitionKey: 'Test',
    RowKey: key,
    ArrayOfValues: sorted
  };

  context.done();
};
