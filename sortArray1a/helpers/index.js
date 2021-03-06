module.exports = item => {
  const { key, ArrayOfValues } = item;

  const sortedValues = ArrayOfValues.sort((x, y) => x - y);

  return {
    PartitionKey: 'Test',
    RowKey: key,
    ArrayOfValues: JSON.stringify(sortedValues)
  };
};
