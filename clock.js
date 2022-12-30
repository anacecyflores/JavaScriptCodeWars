// DESCRIPTION:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// SOLUTION 1:

// let hour = 3600000;
// let minutes = 60000;
// let seconds = 1000;

// function past(h, m, s) {
//   return hour * h + minutes * m + seconds * s;
// }

// console.log(past(0, 1, 1).toString());

// SOLUTION 2:
function past(h, m, s) {
  return 3600000 * h + 60000 * m + 1000 * s;
}

console.log(past(0, 1, 1).toString());
