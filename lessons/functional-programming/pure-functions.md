# Pure functions

Given the same input, pure functions will always return the same output.
Pure functions are free of 'side-effects', and do not depend on any outside inputs or outputs. In other words, they do not manipulate outside state.

```js
function add(a, b) {
  return a + b;
}

var result = 0;
function addTen(num) {
  result += num;
  return result;
}

function randNumAdd(num) {
  return num + Math.random();
}

function capitalizeFirst(str) {
  var firstLetter = str.substring(0, 1).toUpperCase();
  return firstLetter + str.substring(1);
}

function logWord(str) {
  console.log(str);
}
```
