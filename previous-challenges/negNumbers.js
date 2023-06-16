// let num = 1;

// function makeNegative(num) {
//     if (num == math)
// }

// console.log(makeNegative(num));

let num = 0.9;

function makeNegative(num) {
  if (Math.sign(num) == 1) {
    return -num;
  } else {
    return num;
  }
}

console.log(makeNegative(num));
