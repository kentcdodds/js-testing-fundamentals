const { sum, subtract, difference } = require('../math');

let result, expected;

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

result = difference(3, 7);
expected = 4;
expect(result).toBeGreaterThan(expected);
console.log(difference(3, 7));

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual < expected) {
        throw new Error(`${actual} is not greater than ${expected}`);
      }
    },
  };
}
