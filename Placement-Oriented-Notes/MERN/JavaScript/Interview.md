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


`What is event delegation in JavaScript`

Event delegation is a technique where you attach an event listener to a parent
element instead of individual child elements. It allows handling events efficiently,
especially for dynamically added elements.


```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  // Instead of adding an event listener to each <li> element
  // We add a single event listener to the <ul> element
  document
    .getElementById("myList")
    .addEventListener("click", function (event) {
      // Check if the clicked element is an <li> element 
      if (event.target.tagName === "LI") {
        // Do something with the clicked <li> element
        console.log("Clicked on:", event.target.textContent);
      }
    });
</script>


```

`Event Bubbling`

What is event bubbling in JavaScript?

Event bubbling is a mechanism in which an event triggered on a specific element will
also trigger the same event on all of its parent elements. It starts from the innermost
element and propagates upwards in the DOM tree.


```html
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', function (event) {
    console.log('Parent div clicked!');
  });

  document.getElementById('child').addEventListener('click', function (event) {
    console.log('Button clicked!');
  });
</script>

```