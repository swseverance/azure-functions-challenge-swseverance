module.exports = (context, req) => {
  const { ping } = req;

  context.done(null, { "pong": ping });
};
