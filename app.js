// let n = 2;
// let s = "";

// function repeatStr(n, s) {
//   n * s;
//   return n * s;
// }

// console.log(repeatStr(n, s));

function repeatStr(n, s) {
  let word = "";

  for (let i = 0; i < n; i++) {
    word = word + s;
  }

  return word;
}

console.log(repeatStr(20, "chicago").toString());
