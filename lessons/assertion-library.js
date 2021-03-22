/**
 *  We have tested `sum` and `subtract` in simple.js,
 *  but this code is pretty imperative.
 *  It'd be nice to write a little abstraction to make
 *  it read a little nicer. Let's write a simple
 *  abstraction to encapsulate this assertion.
 *
 * Task:
 *  1. Create a function called `expect` going to accept an `actual`.
 *  2. Return an object that has some assertions on it. The first one
 *     here is going to be `toBe`, and that's going to take an expected
 *     value.
 *               **BONUS**
 *  Can you add more assertions like `toEqual`, `toBeGreaterThan`, and
 *  `toBeLessThan`?
 *
 * Execute: Use `node lessons/assertion-library.js` to run the test.
 */
const {sum, subtract} = require('../math')

let result, expected

result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

result = subtract(7, 3)
expected = 4
expect(result).toBe(expected)

/**
 * Answer: Checkout the main branch for the answer.
 */
