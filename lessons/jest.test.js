/**
 * Up to this point we’ve created all our own utilities.
 * As it turns out, the utilities we’ve created mirror the
 * utilities provided by Jest perfectly! Let’s install Jest
 * and use it to run our test!
 *
 * The testing framework we've written actually looks
 * remarkably a lot like Jest. Rather than running `node --require`,
 * and then instead of globals and so on and so forth, we could
 * actually just use Jest directly.
 *
 * Task: run `npx jest`
 */

const {sumAsync, subtractAsync} = require('../math')

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})
