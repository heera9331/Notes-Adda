# JS Interview


`map, reduce, filter`

map, filter, and reduce are three higher-order functions commonly used in functional programming languages, and they are also available in languages that support functional programming paradigms like Python and JavaScript.

`call apply bind`

```javascript

let arr = [1, 2, 3, 4, 5];

/**
 * map -  This function applies a given function to all the items
 * in an iterable (e.g., a list) and returns a new iterable with the
 * results.
 */

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((x) => x ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

/**
 *
 * filter -  This function filters elements from an iterable based on a
 * given function (predicate) and returns a new iterable with only the
 * elements that satisfy the condition.
 */

const evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

/**
 *
 * reduce -  This function repeatedly applies a binary function to the
 * elements of an iterable, reducing it to a single accumulated result.
 */

const sumOfNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumOfNumbers); // Output: 15

```