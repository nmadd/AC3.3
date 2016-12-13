//3 steps: first copy, then take away pieces, then try to do whole thing from memory
//while doing first copy add comments for what everthing does

//following week, code from scatch again

//write down mistakes on front of flash cards (logging/writing down mistakes so you can start looking for patterns in mistakes)

//console log numbers 0 - 10
function logTen() {
  for(var i = 0; i <= 10; i++) {
    console.log(i);
  }
}

logTen(); //logs numbers 0 - 10

//console log last value in array
function logLast(arr) {
  console.log(arr[arr.length - 1]);
}

logLast(['dog', 'cat', 'bat']); //logs 'bat'

//console log values of an array
function logArr(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

logArr(['dog', 'cat', 'bat']); //logs 'dog', 'cat', 'bat'

//console log i based on length of array
function logArrI(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

logArrI(['dog', 'cat', 'bat']); //logs 0, 1, 2

//sum numbers 0 - 10
function sumZeroToTen(arr) {
  var sum = 0;
  for(var i = 0; i <= 10; i++) {
    sum += i;
  }
  return sum;
}

//sum an array
function sumArr(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += 0;
  }
  return sum;
}

//sum i based on length of an array
function sumArrI(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += i;
  }
  return sum;
}

//add function
function add(a, b) {
  return a + b;
}

//add function ES6
let addES6 = (a, b) => a + b;

//multiply function
function multiply(a, b) {
  return a * b;
}

//multiply function ES6
let multiplyES6 = (a, b) => a * b;
