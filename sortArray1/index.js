module.exports = (context, req) => {
  // a separate function will handle sorting of the array
  // so that we can respond to client immediately
  context.sortArrayQueueItem = req;

  context.done(null, {});
};
