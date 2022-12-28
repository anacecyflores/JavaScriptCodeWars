let x = 2;
let y = 6;

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(12, x, y));
