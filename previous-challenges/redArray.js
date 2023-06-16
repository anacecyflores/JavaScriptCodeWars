// return a new array where all the red's are turned to orange... leave the rest of the colors the same.

// ["orange", "orange", "yellow", "orange", "blue"]...

let arr = [
  "red",
  "red",
  "yellow",
  "red",
  "blue",
  "red",
  "blue",
  "blue",
  "red",
  "yellow",
  "blue",
  "red",
  "blue",
  "yellow",
];

function orangeConvert(arr) {
  return arr.map((i) => i.toUpperCase());
}

console.log(orangeConvert(arr));
