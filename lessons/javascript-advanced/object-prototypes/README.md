- title: JavaScript Objects Prototypes and Inheritance 
- tags: javascript, objects

# Resources
- [JavaScript Objects](http://www.w3schools.com/js/js_object_definition.asp)
- [Understand JavaScript's `this` Keyword With Clarity](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

#Lecture
##Object constructors
All objects in JavaScript are modeled after a single object, known as the 'Object' constructor. Constructors are useful when you want to create multiple different objects that all have similar properties or methods. 

Read the [Using an Object Constructor](http://www.w3schools.com/js/js_object_definition.asp) section and try to answer the following: 

- how do we create constructors?
- why are constructors useful?
- what does the `new` keyword do?
- what are some examples of built-in constructors in JavaScript?

##The `this` keyword

`this` is a special keyword in JavaScript that helps use reuse functionality with different objects. The value of the `this` keyword is assigned depending on where you call a function. The value of the `this` keyword will be the object that calls the function that contains `this`. In other words, `this` refers to whichever object is used to call it.

Demo: [`this` keyword](https://repl.it/Cjet/6)

##Exercises: [`this` keyword exercises]()

##Prototype linkage

##Adding methods to `.prototype`

##Using `Object.create` to make new objects