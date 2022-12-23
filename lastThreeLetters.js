const word = "chicago";

const lastLetter = word.charAt(word.length - 1);
const secondLetter = word.charAt(word.length - 2);
const ThirdLetter = word.charAt(word.length - 3);

const lastThreeLetters = [ThirdLetter, secondLetter, lastLetter];

console.log(lastThreeLetters);
