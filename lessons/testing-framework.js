/**
 * One of the limitations of the way that this test is
 * written is that as soon as one of these assertions
 * experiences an error, the other tests are not run.
 * It can really help developers identify what the problem
 * is if they can see the results of all of the tests.
 *
 * Let’s create our own test function to allow us to
 * encapsulate our automated tests, isolate them from other
 * tests in the file, and ensure we run all the tests in the
 * file with more helpful error messages.
 *
 * Task: Encapsulate and Isolate Tests so that we can work
 *       around those failed tests.
 *
 * Execute: Use `node lessons/testing-framework.js` to run the test.
 */

const {sum, subtract} = require('../math')

test('sum adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})

/**
 * Answer: Checkout the main branch for the answer.
 */
