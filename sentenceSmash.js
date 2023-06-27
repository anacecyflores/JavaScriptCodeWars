// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
let words = ["hello", "world", "this", "is", "great"];

function smash(words) {
  let sentence = words.join(" ");
  return sentence;
}

console.log(smash(words));
