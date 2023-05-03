const { sumAsync, subtractAsync, differenceAsync } = require('../math');

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test('difference as Async', async () => {
  const result = await differenceAsync(2, 9);
  const expected = 7;
  expect(result).toBe(expected);
});
