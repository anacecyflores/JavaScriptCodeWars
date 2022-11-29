let str = "how you doin Doug";

function noSpace(str) {
  let newOutcome = str.replaceAll(" ", "");
  return newOutcome;
}
console.log(noSpace(str));

// // WITH REGEX FORM:
// let str = "how you doin";

// function noSpace(str) {
//   let newOutcome = str.replace(/ /g, "");
//   return newOutcome;
// }
// console.log(noSpace(str));
