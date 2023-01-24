// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// // mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
// //  OFFICIAL SOLUTION:
// function mango(quantity, price) {
//   let total = quantity * price;
//   let free = Math.floor(quantity / 3);
//   return total - free * price;
// }
// ----------NOT THE SOLUTION----------------------
// Checking to see how many free mangoes you get :
// let quantity = "";
// let price = quantity * 3;
// function mango(quantity, price) {
//   if (quantity % 3 === 3 || quantity % 5 === 5) {
//     return quantity * (3)[1];
//     // return "1 mango for free";
//   }
//   if (quantity === 6 || quantity % 6 === 6) {
//     // return "6 extra mangoes";
//   } else {
//     // return "no mango for free";
//   }
// }

// console.log(mango(6, price));
