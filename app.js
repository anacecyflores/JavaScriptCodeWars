let flower1 = 6;
let flower2 = 6;
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 == 0 && flower2 % 2 == 0) ||
    (flower2 % 2 == 1 && flower1 % 2 == 1)
  ) {
    return false;
  } else return true;
}

console.log(lovefunc(flower1, flower2));
