// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// let name = owner;

// function greet(name, owner) {
//   if (name == "owner") {
//     return "Hello boss";
//   || return "Hello guest"}
// }

// console.log(greet(name, owner));

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

let name = "bob"; // Replace "John" with the actual name you want to use
let owner = "John"; // Replace "John" with the actual owner's name

console.log(greet(name, owner));
