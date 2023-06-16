// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
let name = "Hello World ";
function abbrevName(name) {
  let upperNames = name.toUpperCase();
  let char = upperNames.split(" ");
  let charName = upperNames.charAt(0) + ".";
  let charLast = char[1];
  let lastSplit = charLast.split("");
  let fullInital = charName + charLast.charAt(0);
  return fullInital;
}

console.log(abbrevName(name));
