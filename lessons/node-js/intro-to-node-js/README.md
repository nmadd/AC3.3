- title: Intro to Node.js
- topics: javascript, node.js

# Resources
- [Intro to Node.js Slides](https://slides.com/nmadd/intro-to-node-js-and-express-3/live#/)
- [Concise Overview of Node.js Main Topics](http://webapplog.com/node-js-fundamentals-a-concise-overview-of-the-main-concepts/)
- [Intro To Node Modules](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
- [Node Require and Exports](http://openmymind.net/2012/2/3/Node-Require-and-Exports/)
- [Debugging Your Node.js Code](https://spin.atomicobject.com/2015/09/25/debug-node-js/)

#Lecture

- Node GLOBAL object
- Node REPL
- Running files with node, using the `node` keyword
  - Write a 'Hello world' program
  - Write a couple of functions
- Loading in modules
- Creating modules
  - Writing our own simple modules (math module?)
- Callbacks error handling
- Intro to NPM
- Installing basic npm packages (moment, chalk)
  - Adding chalk (and moment?) to our basic modules
- Setting up a basic server????

##Running files using node.js
Node.js gives us a whole new environment to run our code in. While in the past we've mostly been running our code in the browser, node.js lets us run our code directly in our terminal.

To run a node script, all you need to do is open up your terminal, and type the following commands:
```
node <path-to-file>
```
(<path-to-file> should be replaced with the actual path to your file)
So for example, if you have a folder with a JavaScript file in it called `app.js`, you can run that file by doing the following command:
```
node app.js
```

##Node REPL
You can also run a node.js REPL (read-evaluate-print-loop) environment for testing out simple commands. To enter the REPL, simply type `node` into your command line.

While in the REPL you can do things like create and store variables, and create and excute functions. You can also use the `.load` keyword to load in entire `.js` files. To load a `.js` file, while in the node REPL type in `.load <name-of-file>` and the file should be loaded in (note: you'll need to be in the same folder in order to load in the file by just using it's name - otherwise, you'll need the entire path to the file.) 

To exit the REPL, type `control c` twice.

##Importing and Exporting Files Using Node's Module System
Node.js is great for building out large scale projects. You can use node.js to build complex, fullstack web applications that have hundreds or even thousands of files.

However once apps start getting bigger and more complex, organizing them starts becoming a little more crucial. Luckily node.js has a built in module system that makes organizing large apps and pieces of code into multiple files pretty easy. Basically, the module system lets one `.js` file interact with another `.js` file, and do things like share functions, objects, and variables. Let's take a look at how it works.

Start by reading over the following articles:
- [Intro To Node Modules](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
- [Node Require and Exports](http://openmymind.net/2012/2/3/Node-Require-and-Exports/)
