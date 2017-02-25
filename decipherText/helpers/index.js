const cipherToMap = cipher => {
  const map = new Map();

  for (const key in cipher) {
    const value = cipher[key];
    map.set(value, key);
  }

  return map;
};

const splitMessage = msg => {
  const arr = [];

  for (let i = 0; i < msg.length; i = i + 2) {
    const char = msg.charAt(i);
    const nextChar = msg.charAt(i + 1) || '';
    arr.push(char + nextChar);
  }

  return arr;
};

const decode = (arrCodes, cipherMap) =>
  arrCodes
  .map(str => parseInt(str))
  .map(code => cipherMap.get(code))
  .join('');

module.exports = { cipherToMap, splitMessage, decode };
