// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// Solution:
function century(year) {
  // if it's a string
  if (typeof year == "string") {
    if (year.toString().slice(-2) == "00") {
      return year.toString().slice(0, 2);
    } else {
      return (Math.floor(+year / 100) + 1).toString();
    }
  }
  // if it's a number
  if (typeof year == "number") {
    return Math.floor((year - 1) / 100) + 1;
  }
  // otherwise
  else {
    return undefined;
  }
}
console.log(century("2000"));
console.log(century("1901"));
console.log(century("2002"));
console.log(century(2002));
console.log(century(1999));
console.log(century(2000));
