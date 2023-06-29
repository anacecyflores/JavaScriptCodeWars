// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.
let one = "aaaa";
let two = "bbbb";
let three = "cccc";

function tripleTrouble(one, two, three) {
  let maxLength = Math.max(one.length, two.length, three.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    if (i < one.length) {
      result += one[i];
    }
    if (i < two.length) {
      result += two[i];
    }
    if (i < three.length) {
      result += three[i];
    }
  }

  return result;
}

console.log(combiner(one, two, three));
