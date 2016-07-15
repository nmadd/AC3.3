<!-- @acxbank javascript-math-1 -->
### Q1. javascript-math-1

Write a function that will check if the absolute value of two numbers is equal. This means that the following are equal:

```javascript
isAbsEqual(4,-4) // returns true
isAbsEqual(-4, 4) // returns true
isAbsEqual(4, 4) // returns trie
```

Use the Math library.
<!-- end @acxbank -->
<!-- @acxbank parseInt-sum -->
### Q2. parseInt-sum

Write a function called `numStringAdder` that takes in two arguments. The arguments can be either numbers or a string of a number (in other words, the arguments can be either `2` or `"2"`, `3` or `"3"`, etc.). The function should add the two numbers together and return a NUMBER. Make sure you are returning a number, and not a string.

Examples:
```javascript
numStringAdder(2, "4"); // returns 6
numStringAdder("3", 5); // returns 8
numStringAdder("6", "1"); // returns 7
numStringAdder(1, 1); // returns 2
```
<!-- end @acxbank -->
<!-- @acxbank javascript-math-2 -->
### Q3. javascript-math-2

Write a function `sumOfAbs(arr)` that will receive as input an array of numbers, and return the sum of the absolute values of these numbers. For eample:

```javascript
sumOfAbs([ 1, 1, -1, -1])  // will return 4
```
will return **4**.

Use the Math library.
<!-- end @acxbank -->
<!-- @acxbank javascript-math-3 -->
### Q4. javascript-math-3

Write a function `maxOfFour(num1, num2, num3, num4)` that takes as input four nubmers and returns the largest of these numbers.

Use the Math library.
<!-- end @acxbank -->
<!-- @acxbank random-number-generator -->
### Q5. random-number-generator

Write a function that takes in a number as an argument and returns a random number between 0 and the argument number. For example, if you input 100 the function should return a random number between 0 and 100.

Example output:
```javascript
randNum(100); // 77
randNum(100); // 32
randNum(100); // 81
randNum(5); // 4
randNum(5); // 2
randNum(5); // 3
```
<!-- end @acxbank -->
<!-- @acxbank javascript-math-7 -->
### Q6. javascript-math-7

Write a function `randomNumber(max)` that return a random number in the range between 0 and the **max**.
<!-- end @acxbank -->
<!-- @acxbank javascript-math-8 -->
### Q7. javascript-math-8

You are given a function that returns a random number between **min** and **max**:

```javascript
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
```

Write a function `randomArray(size, min, max)` that returns an array of size **size** where each element is a **whole** number between **min** and **max**.
<!-- end @acxbank -->
