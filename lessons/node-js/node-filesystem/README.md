- title: Intro to Node.js fs module
- topics: javascript, node.js

# Resources
- [Node Core Modules](http://www.tutorialsteacher.com/nodejs/nodejs-modules)

# Lecture
## Intro to core node.js modules
Node.js comes prepacked with a bunch of built-in modules. Some of the built-in modules include:

- `fs` (for manipulating the file system)
- `path` (for parsing and dealing with file paths)
- `http` (for creating node.js servers)

You can see a list of more core node.js modules [here](http://www.tutorialsteacher.com/nodejs/nodejs-modules).

We're first going to look at the `fs` module.

## fs module
The `fs` module lets you interact with your computer's file system directly. In other words, it lets you do things like read and write text files (including files that include code, and files that just include plain text like word documents), create new folders, and reorganize folders.

fs.mkdir
fs.rmdir
fs.readFile
fs.rename
fs.writeFile
fs.watch

## `__dirname` variable
`__dirname` is a special variable in node.js that contains the path for the specific directory that you are currently in.

## http module
The `http` module lets you interact with the web. In other words, it lets you do things like make requests to websites (aka lets you type in a URL to a website, and will show you the code or information that is returned as a result) and build basic servers to host your own web apps.
