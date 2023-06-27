// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

let x = "-2";

function fakeBin(x) {
  let realBin = "";
  for (let i = 0; i < x.length; i++) {
    const element = x[i];
    if (parseInt(element) >= 5) {
      realBin += "1";
    } else {
      realBin += "0";
    }
  }
  return realBin;
}

console.log(fakeBin(x));

//  if (x >= 2)
//     return "yes";
//   } else return "no";
