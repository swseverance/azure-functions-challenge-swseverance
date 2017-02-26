module.exports = (context, req, tableEntry) => {
  const { key } = req;
  const { ArrayOfValues } = tableEntry;

  context.done(null, { key, ArrayOfValues });
};
