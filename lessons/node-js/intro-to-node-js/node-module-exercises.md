##Setup
- Create a new folder
- Add a `main.js` file to your folder
- Add a `math-module.js` file to your folder

##Exercises
- In your `math-module.js` file add a function called `sum`. The `sum` function should take in two arguments and return the two arguments added together.

  Example:
  ```js
  sum(3, 6); //returns 9
  ```
- Add a `module.exports` object to the bottom of your `math-module.js` file.
- Add your `sum` function to `module.exports`
- In your `main.js` file, use the `require` keyword to import in your `math-module.js` file
- Call the `sum` function from within your `main-module.js` file and save the results as a new variable
- Add a `console.log` that logs out that saved variable with the results
- Open up your terminal and run your `main-module.js` file. You should see the output from your `sum` function
