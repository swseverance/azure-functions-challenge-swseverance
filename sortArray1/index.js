module.exports = (context, req) => {
  // place request body in a queue for future
  // processing (sorting of the array values
  // and subsequent storage in a table)
  context.bindings.sortArrayQueueItem = req;

  context.done(null, {});
};
