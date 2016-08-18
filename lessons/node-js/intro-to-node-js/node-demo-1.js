console.log('Hello world');
var exports = module.exports;
function sum(a, b) {
  return a + b;
}

// sum(2, 3);
// sum(1, 4);
// sum(5, 3);
// sum(7, 3);

// module.exports.sum = sum;

exports.sum = sum;
