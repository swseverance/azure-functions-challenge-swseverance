module.exports = (context, req, tableEntry) => {
  const { key } = req;
  const ArrayOfValues = JSON.parse(tableEntry.ArrayOfValues);

  context.done(null, { key, ArrayOfValues });
};
