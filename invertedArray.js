// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

let array = [1, 2, -3];

// function invert(array) {
//   let inverted = [];
//   for (let i = 0; i < array.length; i++) {
//     inverted.push(-array[i]);
//     return inverted;
//   }
// }

function invert(array) {
  var inverted = [];
  for (var i = 0; i < array.length; i++) {
    inverted.push(-array[i]);
  }
  return inverted;
}

console.log(invert(array));
