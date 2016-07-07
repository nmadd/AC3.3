Title | Tags
--- | ---
JavaScript Fundamentals: Workshop Review | javascript, arrays, conditionals, loops, functions

## Objectives
* Learn how arrays work under the hood
* Be able to confidently answer all wkshp assessment questions (ex: find second largest element in an input array)

## Resources
TODO: Add links for slides, live coding examples, helpful resources, etc.

##Lecture
###Functions are everywhere
Functions are the fundamental building blocks of JavaScript programs. Functions allow us to easily reuse pieces of code in different contexts, reduce repition, and keep our programs modular.

**Discussion** Why is reducing repetition important? Why is reusability and modularity important?

Functions are everywhere in JavaScript, including things like `console.log`, `alert`, `prompt`, and array methods.

###Intro to scope

###Demo: Functional scope
- Same variable name, inside and outside of function
- Nested functions
- `for` loop scope (or not)
- What happens if we write a variable within a function without using the `var` keyword?

###Anonymous functions
We cam also declare functions anonymously, without giving them a variable name

**Discussion** Why would we need anonymous functions? What are some advantages and disadvantages?

###The call stack

###Demo: The call stack
Enter the following in Chrome console and open dev tools:
```javascript
function one(){
	debugger;
	console.log('one');
	two();
}

function two() {
	debugger;
	console.log('two');
	three();
}

function three(){
	debugger;
	console.log('three')
	four();
}

function four() {
	debugger;		
	console.log('four')
}
```

