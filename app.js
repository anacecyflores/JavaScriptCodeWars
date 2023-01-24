// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
// var sum = 0;
// for (var x = 0; x < 1000; x++)
// {
//     if (x % 3 === 0 || x % 5 === 0)
//     {
//        sum += x;
//     }
// }
// console.log(sum);

let quantity = "";
let price = quantity * 3;
function mango(quantity, price) {
  if (quantity % 3 === 3 || quantity % 5 === 5) {
    return "1 mango for free";
  }
  if (quantity === 6 || quantity % 6 === 6) {
    return "6 extra mangoes";
  } else {
    return "no mango for free";
  }
}

console.log(mango(6, price));
