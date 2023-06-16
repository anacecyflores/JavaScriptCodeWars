// Instructions:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Solution:----------------------------
let nums = 123456789;

function reverser(nums) {
  let newArr = [];
  let numsArr = nums.toString().split("").reverse();
  for (let i = 0; i < numsArr.length; i++) {
    newArr.push(parseInt(numsArr[i]));
  }
  return newArr;
}

console.log(reverser(nums));
