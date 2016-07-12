<!-- @acxbank array-tail -->
### Q1. array-tail

Write a function called `tail` that removes the first element from an array. The function should take in one argument: an array. The function should return a new array that contains all of the original elements except the first. 

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
tail([1,2,3,4]); //returns [2,3,4]
tail(['cat','dog','catdog']); //returns ['dog', 'catdog']
tail([1,'one']); //returns [1]
```
<!-- end @acxbank -->
<!-- @acxbank array-string-plus -->
### Q2. array-string-plus

Write a function that takes in an array of strings and returns a single string with the word 'plus' inserted between every word.

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Example:
```javascript
stringPlus(['one', 'two', 'three']); //returns 'one plus two plus three'
```
<!-- end @acxbank -->
<!-- @acxbank array-last-to-first -->
### Q3. array-last-to-first

Write a function that removes the last element of an array and adds it to the front. Your function should NOT use `array.length` or a loop. The function should take in one argument: an array. The function should return a new array with the last element from the original array removed, and added to the front of the new array.

Hint: there are two [array methods](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
lastToFirst([1,2,3,4]); //returns [4,1,2,3]
```
<!-- end @acxbank -->
<!-- @acxbank contains-in-array -->
### Q4. contains-in-array

Write a function called `contains` that checks if an element exists within an array. The function should take in two arguments: an array, and an element to search for within that array. The function should return `true` if the element is within the array, and should return `false`   if the element is not in the array. 

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
contains([1,2,3,4], 2);     //returns true
contains([1,2,3,4], 1);     //returns true
contains([1,2,3,4], 5);     //returns false
contains([1,2,3,4], 'dog'); //returns false
```
```swift
contains([1,2,3,4], element: 1)     //returns true
contains([1,2,3,4], element: 2)     //returns true
contains([1,2,3,4], element: 5)     //returns false
contains([1,2,3,4], element: "bob") //returns false
```
<!-- end @acxbank -->
<!-- @acxbank join-three-arrays -->
### Q5. join-three-arrays

Write a function called `joinThreeArrays` that joins three arrays together. The function should take in three separate arrays as arguments. The function should return a new array that contains all three arrays combined into one array. 

Hint: there's an [array method](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

Examples:
```javascript
joinThreeArrays([1,2],[3,4],[5,6]); //returns [1,2,3,4,5,6]
```
<!-- end @acxbank -->
<!-- @acxbank remove-from-array -->
### Q6. remove-from-array

Write a function that removes a word from an array. The function should take in two arguments: the array, and the word to remove. If the 'word to remove' is not in the array the entire original array should be returned.

Hint: there are a couple of [array methods](http://www.w3schools.com/jsref/jsref_obj_array.asp) that would be very helpful.

```javascript
removeFromArray(['cat', 'dog', 'frog'], 'frog'); //returns ['cat', 'dog']
removeFromArray(['cat', 'dog', 'frog'], 'fish'); //returns ['cat', 'dog', 'frog']
```
<!-- end @acxbank -->