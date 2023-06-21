// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// let str = "The greatest victory";
// let array = str.split(" ");
// // let reversedStr = array.toReversed();

// function reverseWords(str) {
//   array.toReversed(); // reverse those words
// }

// console.log(reverseWords(str));

let str = "The greatest victory";

function reverseWords(str) {
  let array = str.split(" ");
  let reversedArray = array.reverse();
  let reversedStr = reversedArray.join(" ");
  return reversedStr;
}

console.log(reverseWords(str));
s;
