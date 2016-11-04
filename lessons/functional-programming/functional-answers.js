//write a function (or series of functions) that takes in an array that contains numbers, and returns the sum of all the even numbers

//write a function (or series of functions) that takes in an array that contains strings, and returns an array with the number of letters in each string

//write a function (or series of functions) that takes in an array of strings, and returns an object with the vowel count of all of the strings combined

const stringsToLetters = arr => arr.join('').split('');
const vowelCount = arr => arr.reduce((count, letter) => {
  console.log('sdsdsds')
  if(count[letter]) count[letter]++;
  return count;
}, {a: 0, e: 0, i: 0, o: 0, u: 0});

console.log(vowelCount(stringsToLetters(['this', 'is', 'a', 'test'])));
