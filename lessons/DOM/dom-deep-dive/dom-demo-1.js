var newElement = document.createElement('button');
newElement.innerHTML = "Hey I'm a button!";

// var mainDiv = document.getElementBy('main-div');
document.body.appendChild(newElement);

document.getElementsByTagName('body')[0].addEventListener('click', function(event){
  console.log(event); //this will log out a ton of info about the event to the console
})
