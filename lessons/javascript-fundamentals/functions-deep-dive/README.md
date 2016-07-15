- title:  JavaScript Fundamentals: Functions Deep Dive
- tags:  functions, javascript

# Objectives
* Be able to explain scope basics
* Understand the difference between anonymous and named functions

# Resources
[JavaScript Functions (W3)](http://www.w3schools.com/js/js_functions.asp)

#Lecture
##Functions are everywhere
Functions are the fundamental building blocks of JavaScript programs. Functions allow us to easily reuse pieces of code in different contexts, reduce repitition, and keep our programs modular.

**Discussion** Why is reducing repetition important? Why is reusability and modularity important?

Functions are everywhere in JavaScript, including things like `console.log`, `alert`, `prompt`, and array methods.

###Demo
- Built in functions
- Passing functions to functions
- The `arguments` object

##Intro to scope
Functions create their own 'namespaces' (known as 'scope') which contain sets of variables, objects, and functions that you can access. Each function has its own scope, so variables declared within a function will not interfere with variables declared outside of a function (even if the variables have the same name).

###Demo: Functional scope
- Same variable name, inside and outside of function
- Nested functions
- `for` loop scope (or not)
- What happens if we write a variable within a function without using the `var` keyword?

##Anonymous functions
We can also declare functions anonymously, without giving them a variable name

**Discussion** Why would we need anonymous functions? What are some advantages and disadvantages?

##The call stack
Functions are called in a certain order, depending on where they;re invoked. This order (known as 'the call stack') effects how our program runs, and can be traced using Chrome dev tools.

###Demo: The call stack
Enter the following in Chrome console and open dev tools:
```javascript
function one() {
	debugger;
	console.log('one');
	two();
}

function two() {
	debugger;
	console.log('two');
	three();
}

function three() {
	debugger;
	console.log('three')
	four();
}

function four() {
	debugger;		
	console.log('four')
}
```

