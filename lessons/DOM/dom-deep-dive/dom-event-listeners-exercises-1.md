##Setup
- Create an index.html file that just has an empty <body></body> tag in it
- Open your index.html file up in Chrome. It should just be a blank page

##Exercises
Do not edit your HTML file for any of these exercises. Only use DOM methods:
- Create a new 'button' element
- Add a 'first-button' id to your button element (you can use the [`setAttribute`](http://www.w3schools.com/jsref/met_element_setattribute.asp) method)
- Append the new button element to the document.body
- Add an event listener to the button. When clicked, the button should log "Clicked the first button" to the console
- Add another event listener to the button. When clicked, the button should change the background color of the page `body` to 'magenta.' It should also still log "Clicked the first button" to the console
- Create a new 'button' element
- Add a 'second-button' id to your button element (you can use the [`setAttribute`](http://www.w3schools.com/jsref/met_element_setattribute.asp) method)
- Append the new button element to the document.body
- Add an event listener to the second button. When clicked, the button should create a *new* button element and append it to the body of the document
- Create a new `img` element
