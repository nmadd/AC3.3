<!-- @acxbank remove-last-two-from-array -->
### Q1. remove-last-two-from-array

Write a function `removeLastTwo` that takes an array as an argument and returns a copy of the array without the last two elements. If the original array is two elements or less, the function should return an empty array.

Example:
```js
removeLastTwo(['dog', 'cat', 'bat', 'octopus']); // returns ['dog','cat']
```
<!-- end @acxbank -->
<!-- @acxbank every-third-array-element -->
### Q2. every-third-array-element

Write a function `everyThird` that takes an array as an argument and returns a new array that contains every third element of the original array.

Example:
```js
everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']); // returns ['c','f','i']
everyThird([1,2,3,4,5,6,7,8,9,10,11,12]) // returns [ 3, 6, 9, 12 ]
```
<!-- end @acxbank -->
<!-- @acxbank stringify-two-arrays -->
### Q3. stringify-two-arrays

Write a function `stringArrays` that takes two arrays as arguments and returns ONE string that contains all the words in both arrays, separated by commas. In other words, the function joins both arrays together then turns everything into a string.

Example:
```js
stringArrays(['arya', 'sansa', 'bran'], ['daenerys', 'tyrion', 'jon']); // returns 'arya, sansa, bran, daenerys, tyrion, jon'
```
<!-- end @acxbank -->
<!-- @acxbank array-tail -->
### Q4. array-tail

Write a function called `tail` that removes the first element from an array. The function should take in one argument: an array. The function should return a new array that contains all of the original elements except the first. 

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
tail([1, 2, 3, 4]);  // returns [2, 3, 4]
tail(['cat', 'dog', 'catdog']);  // returns ['dog', 'catdog']
tail([1, 'one']);  // returns [1]
```
<!-- end @acxbank -->
<!-- @acxbank join-three-arrays -->
### Q5. join-three-arrays

Write a function called `joinThreeArrays` that joins three arrays together. The function should take in three separate arrays as arguments. The function should return a new array that contains all three arrays combined into one array. 

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
joinThreeArrays([1, 2], [3, 4], [5, 6]); // returns [1, 2, 3, 4, 5, 6]
```
<!-- end @acxbank -->
<!-- @acxbank remove-from-array -->
### Q6. remove-from-array

Write a function that removes a word from an array. The function should take in two arguments: the array, and the word to remove. If the 'word to remove' is not in the array the entire original array should be returned.

Hint: there are a couple of [array methods](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

```javascript
removeFromArray(['cat', 'dog', 'frog'], 'frog'); // returns ['cat', 'dog']
removeFromArray(['cat', 'dog', 'frog'], 'fish'); // returns ['cat', 'dog', 'frog']
```
<!-- end @acxbank -->
<!-- @acxbank array-string-plus -->
### Q7. array-string-plus

Write a function that takes in an array of strings and returns a single string with the word 'plus' inserted between every word.

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Example:
```javascript
stringPlus(['one', 'two', 'three']);  // returns 'one plus two plus three'
```
<!-- end @acxbank -->
<!-- @acxbank array-last-to-first -->
### Q8. array-last-to-first

Write a function that removes the last element of an array and adds it to the front. Your function should NOT use `array.length` or a loop. The function should take in one argument: an array. The function should return a new array with the last element from the original array removed, and added to the front of the new array.

Hint: there are two [array methods](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
lastToFirst([1, 2, 3, 4]);  // returns [4, 1, 2, 3]
```
<!-- end @acxbank -->