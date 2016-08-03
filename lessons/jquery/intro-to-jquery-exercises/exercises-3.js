$('#enter-button').click(function(){
  var enteredText = $('input').val();
  var newNode = document.createElement('p');
  newNode.innerHTML = enteredText;
  $('li .green').html(newNode)
})
