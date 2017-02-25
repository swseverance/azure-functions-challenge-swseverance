module.exports = item => {
  const { key, ArrayOfValues } = item;
  const sortedValues = ArrayOfValues.sort((x, y) => x - y).toString();

  return {
    PartitionKey: 'Test',
    RowKey: key,
    ArrayOfValues: sortedValues
  };
};
