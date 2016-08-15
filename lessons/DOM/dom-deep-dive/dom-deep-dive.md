- title: DOM Review
- topics: javascript, DOM

# Resources
- [What is the DOM?](https://css-tricks.com/dom/)
- [Intro to the DOM](http://www.w3schools.com/js/js_htmldom.asp)
- [DOM Reference](http://www.w3schools.com/js/js_htmldom_document.asp)
- [Accessing DOM Elements](http://www.w3schools.com/js/js_htmldom_elements.asp)
- [The Basics of JS DOM Manipulation](http://callmenick.com/post/basics-javascript-dom-manipulation)

#Lecture
##From static to dynamic pages
We're all familiar with HTML and CSS pages. It's pretty straightforward to create a static HTML page in Sublime Text or another similar text editor.

However once we open up that HTML page in a browser, things start to get a little more interesting. In a browser our HTML pages basically become 'living documents', or in other words, they're no longer just static pages. Browsers basically allow us to interact with and *change* our formerly static HTML pages.

Think about what's needed in order to turn a static HTML page into a living, changeable document. Given a static HTML page, how could you create a way to interact with it?

##The browser creates the DOM
So what is the DOM? You can start by [reading this](https://css-tricks.com/dom/), which should give you an introduction to what the DOM is doing.

Basically, your browser creates the DOM based on your static HTML page. At its simplest the DOM is just your browser's interpretation of your HTML, structured in a way that lets you use JavaScript to interact with and manipulate your page.

In other words, our HTML starts off as a static page. Then its loaded into our browser. But our browser needs some way to interact with the HTML. Luckily our browser understands JavaScript, so it can use JavaScript to interact with the HTML. But if we simply have a static HTML page there's no way for HTML and JavaScript to talk to each other. So our browser creates the DOM to make it a little easier to form a connection between HTML and JavaScript.

##DOM basics
To start, we can use the DOM methods to basically create any HTML that we could in a normal, static HTML page.

Some examples:
```html
<!-- Creating a div in HTML: -->
<div></div>
```
```js
//Creating a div using DOM methods:
document.createElement('div');
```
```html
<!-- Creating a button in HTML: -->
<button></button>
```
```js
//Creating a div using DOM methods:
document.createElement('button');
```
Similarly, we can use DOM methods to add classes to our elements, just like we could do using static HTML:
```html
<!-- Creating a div with 'main-div' class in HTML: -->
<div class="main-div"></div>
```
```js
//Creating a div with 'main-div' class using DOM methods:
var newDiv = document.createElement('div');
newDiv.className = 'main-div';
```
```html
<!-- Creating a button with 'main-button' class in HTML: -->
<button class='main-button'></button>
```
```js
//Creating a button with 'main-button' class using DOM methods:
var newButton = document.createElement('button');
newButton.className = 'main-button';
```
That's great and all, but we're missing one big thing...if we create these elements directly in our HTML they'll show up on our page, but if we make them using DOM methods they're not showing up anywhere. That's because we still need to manually add our new DOM elements to the page, like in the examples below:
```html
<!-- Creating a div with 'main-div' class in HTML: -->
<div class="main-div"></div>
```
```js
//Creating a div with 'main-div' class using DOM methods:
var newDiv = document.createElement('div');
newDiv.className = 'main-div';
//Adding the newDiv element directly to the body
document.body.appendChild(newDiv);
//Our element will now be added to our HTML body, and will show up on the page
```
```html
<!-- Creating a button with 'main-button' class in HTML: -->
<button class='main-button'></button>
```
```js
//Creating a button with 'main-button' class using DOM methods:
var newButton = document.createElement('button');
newButton.className = 'main-button';
//Similarly, we can select elements that already exist within our HTML and add new elements directly to those.
//So if we pretend our HTML already has a <div> element with the id 'main-div', we can select that element directly and add right to it like so:
var mainDiv = document.getElementById('main-div');
mainDiv.appendChild(newButton);
//Our new button will now be added within our main div
```
