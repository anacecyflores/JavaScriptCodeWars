let str = "how you doin Doug";

function noSpace(str) {
  let newOutcome = str.replaceAll(" ", "");
  return newOutcome;
}
console.log(noSpace(str));
