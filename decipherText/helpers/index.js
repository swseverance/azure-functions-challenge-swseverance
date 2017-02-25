const cipherToMap = cipher => {
  const map = new Map();

  for (const key in cipher) {
    const value = cipher[key];
    map.set(value, key);
  }

  return map;
};

module.exports = { cipherToMap };
