/**
 * These testing utilities that we built are pretty useful.
 * We want to be able to use them throughout our application
 * in every single one of our test files.
 *
 * Some testing frameworks provide their helpers as global
 * variables. Let’s implement this functionality to make it
 * easier to use our testing framework and assertion library.
 * We can do this by exposing our test and expect functions on
 * the global object available throughout the application.
 *
 * Task: Create global object in "setup-globals.js" so that we can use `test` and
 * `expect` in any file inside the project.
 *
 * Execute: Use `node --require ./setup-globals.js lessons/globals.js` to run the test.
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

/**
 * Hint: https://nodejs.org/api/globals.html#globals_global
 *
 * Answer: Checkout the main branch for the answer.
 */
