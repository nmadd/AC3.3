<!-- @acxbank type-checker -->
### Q1. type-checker

Write a function called `typeChecker` that logs out different things based on the type of the argument. If the input is a string, the function should log "I'm a string!" If the input is a number, the function should log "I'm  a number!" If the input is a boolean, the function should log "I'm a bool!" If the input is empty, the function should log "Nothing to see here."

Examples:
```javascript
typeChecker('Hello')  //"I'm a string!"
typeChecker(27)       //"I'm a number!"
typeChecker(false)    //"I'm a bool"
typeChecker('')       //"I'm a string!"
typeChecker()         //"Nothing to see here"
```
<!-- end @acxbank -->
<!-- @acxbank is-empty-string -->
### Q2. is-empty-string

Write a function to check if an input is an empty string. If the input is an empty string it should return true, otherwise it should return false. However if the input is NOT a string (in other words, if the input is a number, or an array, etc.), the function should also return false.

Examples:
```javascript
isEmptyString('') // returns true
isEmptyString('this is a string') // returns false
isEmptyString(99) // returns false
```
<!-- end @acxbank -->
<!-- @acxbank count-the-vowels -->
### Q3. count-the-vowels

Write a function that accepts a string as a parameter and counts the number of vowels within the string (vowels include a, e, i, o , u - don't count 'y'). The function should return the number of vowels in the string.

Example output:
```javascript
vowelCount('test string'); // returns 2
vowelCount('longer string with more vowels'); // returns 8
```
<!-- end @acxbank -->
<!-- @acxbank capitalize-first-letters-of-string -->
### Q4. capitalize-first-letters-of-string

Write a function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
```
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
```
<!-- end @acxbank -->
<!-- @acxbank cut-a-string-at-character -->
### Q5. cut-a-string-at-character

Write a function to return a part of string after a specified character. The function should take two arguments, the first beign the string, and the second being the character. The function should return only the part of the string that comes AFTER the specified character. In other words, the function should chop the string into two parts and return only the part that comes after the specified character.

Examples:
```javascript
subStrAfterChars('this is a test string', 'a') // returns " test string"
subStrAfterChars('this is another test', 'o') // returns "ther test"
```
<!-- end @acxbank -->
<!-- @acxbank upper-lower-string -->
### Q6. upper-lower-string

Write a function that takes a string and capitalizes every even indexed letter. Similarly, every off indexed letter should be lower case. 

Examples:
```javascript
upperLower('elephant');  // returns 'ElEpHaNt'
upperLower('BANANA');    // returns 'BaNaNa'
```
<!-- end @acxbank -->
<!-- @acxbank truncate-a-string -->
### Q7. truncate-a-string

Write a function to truncate a string if it is longer than the specified number of characters. The function should take two arguments, the first argument being the string and the second argument being the number of characters to truncate the string by. Truncated strings should end with an ellipsis sequence ("…"). If the specified number is large than the length of the string, the entire string should be returned.

Example outputs:
```javascript
text_truncate('We are doing JS string exercises', 19)); // returns "We are doing JS ..."
text_truncate('This is a short sentence', 100)); // returns "This is a short sentence" 
```
<!-- end @acxbank -->
<!-- @acxbank exes-and-ohs -->
### Q8. exes-and-ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Example outputs:
```javascript
XO("ooxx")    // returns true
XO("xooxx")   // returns false
XO("ooxXm")   // returns true
XO("zpzpzpp") // returns true because zero 'x's and 'o's are present
XO("zzoo")    // returns false
```
<!-- end @acxbank -->