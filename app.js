// // let m = (*)
// // let a = (+)
// // let s = (-)
// // let d = (/)

// let value1 = ''
// let value2 = ''
// let operationA = "+"
// let operationS = "-"
// let operationD = "/"
// let operationM = "*"

// function basicOp(operation, value1, value2) {
//  if operationA => { value1 + value2}
//  } return basicOp()
//  if operationS => { value1 - value2 }
// if operationD => { value1 / value2 }
// if operationM => { value1 * value2}

// console.log (basicOp("+", 1, 2).tostring())

function basicOp(operation, value1, value2) {
  if (operation === "-") return value1 - value2;
  if (operation === "/") return value1 / value2;
  if (operation === "+") return value1 + value2;
  if (operation === "*") return value1 * value2;
  else return "not an operation";
}

console.log(basicOp("*", 5, 5));
