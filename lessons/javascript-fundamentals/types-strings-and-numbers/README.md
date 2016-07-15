- title: JavaScript Fundamentals: Types, Strings, and Numbers
- tags: javascript, numbers, strings, types

# Objectives
* Be able to name the six JavaScript types
* Know how to use `typeof` to identify type
* Know how to use slice, toUpperCase/toLowerCase, split, and indexOf to manipulate strings
* Be able to use `Math` object's `ceil` / `floor`, and `random`

# Resources
- [JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript String Methods] (http://www.w3schools.com/jsref/jsref_obj_string.asp)
- [JavaScript Number Methods](http://www.w3schools.com/js/js_number_methods.asp)
- [JavaScript Math Object](http://www.w3schools.com/js/js_math.asp)

#Lecture
##Intro to JavaScript types
JavaScript has six data types: strings, numbers, booleans, objects, undefined, and null. 

In some languages you need to specifically declare data types, but JavaScript is dynamic, which means you do not need to explicity declare the type.

You can check the type of any piece of data by using the `typeof` keyword. For example, `typeof 'test'` would return `'string'`, and `typeof 5` would return `'number'`.

Watch out for type coercion - if you mix two pieces of data that are different types, the JavaScript engine may try to change them both to the same type behind the scenes. 

##Demo: Data types
- `typeof` operator
- Type coercion

##Strings
Strings are one of five 'primitive' JavaScript data types. Strings are fundamental to almost everything we do in JavaScript, so good string manipulation skills are crucial.

##Demo: String manipulation
- `indexOf`
- `search`
- `slice` / `substring`
- `toUpperCase` / `toLowerCase`
- `charAt` / `charCodeAt`
- `split`
- `length`

##Numbers
Numbers are also a 'primitive' JavaScript data type. Unlike some other languages, JavaScript only has one type of number. Let's dive right in and# get some experience with basic number manipulation.

##Demo: Number manipulation
- `pareseInt`
- `Math` object
	- `ceil` / `floor`
	- `random`
	- `exp` / `sqrt`
	- `abs`
- `NaN`
- `Infinity`