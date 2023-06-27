// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function isGreaterThanFive(x) {
//      return x > 5;
// }

// [1, 10, 4, 6].filter(isGreaterThanFive); // Returns [10, 6]

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let neg = [];
  let pos = [];
  for (let i = 0; i < input.length; i++) {
    if (Math.sign(input[i]) === -1) {
      neg.push(input[i]);
    }
    if (Math.sign(input[i]) === 1) {
      pos.push(input[i]);
    }
  }
  //   first part done
  let posCount = pos.length;

  //   second part done
  let adder = 0;
  for (let i = 0; i < neg.length; i++) {
    adder += neg[i];
  }
  let finalAnswer = [posCount, adder];
  return finalAnswer;
}
