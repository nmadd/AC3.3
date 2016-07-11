<!-- @acxbank for-js-9 -->
### Q1. for-js-9

Write a function that takes a string argument and returns the number of spaces in the string.  For example,

```js
numberOfSpaces("The quick brown fox jumped over the lazy dogs.")
```

returns 8.  Make sure your function returns the result, rather than printing it.
<!-- end @acxbank -->
<!-- @acxbank for-js-12 -->
### Q2. for-js-12

How many numbers will this loop print?

```js
for (var i = 0; i > 10; ++i) {
    console.log(i);
}
```

Be careful!
<!-- end @acxbank -->
<!-- @acxbank for-js-6 -->
### Q3. for-js-6

What is the output of this code? Pay careful attention to the for loop!

```java
var s = "CANTALOUPE";
for (var i = s.length - 1; i >= 0; i -= 2)
   console.log(s[i]);
```
<!-- end @acxbank -->
<!-- @acxbank remove-zero -->
### Q4. remove-zero

Write a function that, given a string as input, will remove all 0s from that string.

Example:
```javascript
input:"hello2016"
output:"hello216"
```
<!-- end @acxbank -->
<!-- @acxbank min-function -->
### Q5. min-function

Write a function `min` that takes two arguments and returns their minimum.

```javascript
// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```
<!-- end @acxbank -->
<!-- @acxbank find-longest-word -->
### Q6. find-longest-word

Write a function `findLongestWord()` that takes an array of words and returns the length of the longest one.

Example:
```js
findLongestWord(['dog', 'cat', 'bat', 'octopus']); // returns '7'
```
<!-- end @acxbank -->
<!-- @acxbank repeat-a-string -->
### Q7. repeat-a-string

Write a function to concatenates a given string `n` times. The function should take in two arguments: the first argument should be the string, and the second argument should be the number of times the string should be concatenated. If no second argument is entered, the string should be logged once.

Example output:
```javascript
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));
"Ha!" 
"Ha!Ha!" 
"Ha!Ha!Ha!"
```
<!-- end @acxbank -->
<!-- @acxbank print-sequence -->
### Q8. print-sequence

Write a loop that will log the following sequence to the console:
`1,2,4,7,11,16,22,29,37,46,56,67,79,92`

Hints:
The difference between two adjenct elements in this sequence increments by 1 at each step.
While loop is a better choice for this question
<!-- end @acxbank -->