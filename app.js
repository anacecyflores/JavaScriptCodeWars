let str = "how you doin";

function noSpace(str) {
  let newOutcome = str.replace(/ /g, "");
  return newOutcome;
}
console.log(noSpace(str));
