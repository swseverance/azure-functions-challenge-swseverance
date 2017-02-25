const { cipherToMap, splitMessage, decode } = require('./helpers');

module.exports = (context, req) => {
  const { key, msg, cipher } = req;

  const cipherMap = cipherToMap(cipher);
  const arrCodes = splitMessage(msg);
  const result = decode(arrCodes, cipherMap);

  context.done(null, { key, result });
};
