**"In order to understand recursion, you must first understand recursion"**

![recursive patrick](https://media.giphy.com/media/xlTwaFb20TVjW/giphy.gif)

# Intro
In computer science, recursion basically means a function that calls itself. Recursion can be a little mind bending at first but is actually relatively simple. Let's dive in.


## The Base Case
The most important part of any recursive function is the 'base case'. The base case is basically a conditional that tells the function to stop calling itself (the base case is usually just a simple `if` statement). Without a base case, recursive functions would call themselves infinitely, and leave you stuck in an endless loop, like Patrick in the GIF at the top of the page.


The function should NOT call itself within the base case. In other words, the base case `if` statement should do the very last thing the function does before ending.

Here's an example of a recursive function without a base case:

```js
function countForever(num) {
  console.log(num);
  countForever(num + 1);
}
```

And here's an example of a recursive function with a base case:

```js
function countToTen(num) {
  if(num === 10) {
    console.log(10);
  }
  else {
    console.log(num);
    countToTen(num + 1);
  }
}
```

Make sure your recursive functions always have a base case!

## State

```js
function recSum(x) {
  if(x === 1) {
    return x;
  } else {
    return x + recSum(x - 1);
  }
}
recSum(5);
```
If we could get a look behind the scenes at what's happening with the recursive call `return x + recSum(x - 1)`, the series of function calls would be the following:
```js
//initial function call:
recsum(5)
//recursive calls:
5 + recsum(4)
5 + (4 + recsum(3))
5 + (4 + (3 + recsum(2)))
5 + (4 + (3 + (2 + recsum(1))))
5 + (4 + (3 + (2 + 1)))
15 // final answer
```


# Recursion vs Iterative Loops

```js
function iterativeLog(max) {
  //Loops from 0 to the max, and logs each number
  for(var i = 0; i <= max; i++) {
    console.log(i);
  }
}
iterativeLog(10);
```

```js
function recursiveLog(max, i) {
  //Base case:
  if(i === max){
  	console.log(i);
  }
  //Recursive call:
  else {
  	console.log(i);
  	recursiveLog(max, i + 1);
  }
}
recursiveLog(10, 0);
```

![recursion color coded](http://i.imgur.com/Jaidtko.png)

Here's another good summary of the differences between recursion and iterative loops:

![recursion vs iterative table](http://i.imgur.com/EU13LeM.png)
Source: [Mastering Recursive Programming](https://www.ibm.com/developerworks/library/l-recurs/)

# Head and Tail

# When to use recursion
You should use recursion when it helps makes your code more readable.

# Big O Time Complexity
In iterative loops, we count the number of loops in order to figure out the Big O complexity. Similarly, with recursion, we count the number of times the function is being called.

# Resources
- [Recursion, Recursion, Recursion](https://medium.freecodecamp.com/recursion-recursion-recursion-4db8890a674d#.kcw8k9ec6)
- [Recursion in Functional JavaScript](https://www.sitepoint.com/recursion-functional-javascript/)
- [Mastering Recursive Programming](https://www.ibm.com/developerworks/library/l-recurs/)
- [Recursion in JavaScript](http://kevvv.in/untitledrecursion-in-javascript/)
