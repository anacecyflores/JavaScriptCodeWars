const word = "chicago";

const lastLetter = word.charAt(word.length - 1);
const secondLetter = word.charAt(word.length - 2);
const thirdLetter = word.charAt(word.length - 3);

const lastThreeLetters = [thirdLetter, secondLetter, lastLetter];

console.log(lastThreeLetters);
