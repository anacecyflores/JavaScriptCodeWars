// let arrA = [1, 2, 3];
// let arrB = [1, 1, 1];
// function arrayPlusArray(arrA, arrB) {
//   return arrA.concat.arrB;
// }
// console.log(arrayPlusArray(arrA, arrB));
// function sum_array(arrA, arrB) {
//   // store our final answer
//   var sum = 0;

//   //   loop through entire array
//   for (var i = 0; i < arrA.length; i++) {
//     // loop through each inner array
//     for (var j = 0; j < arrB.length; j++) {
//       // add this number to the current final sum
//       sum += arr[i][j];
//     }
//   }

//   return sum;
// }

// sum_array([[3, 2], [1], [4, 12]]);

let arr1 = [1, 2, 3, 1];
let arr2 = [2, 3, 4, 1];

function arrayPlusArray(arr1, arr2) {
  let joinedArr = arr1.concat(arr2);
  // joinedArr = [1, 2, 3, 1, 2, 3, 4]
  let sum = 0;

  for (let i = 0; i < joinedArr.length; i++) {
    sum = sum + joinedArr[i];
  }
  return sum;
}

console.log(arrayPlusArray(arr1, arr2));
