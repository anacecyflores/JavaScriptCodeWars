// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces. (Could be an interview question)

// NOTE- not passing numbers, booleans, etc. JUST lower case letters &/or spaces ***
// 1.input into an array
// 2.Need to loop through EVERY single value the array and check to see if its vowel

// Solution:
function getCount(str) {
  let vowelsCount = 0;

  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        vowelsCount++;
        break;
      case "e":
        vowelsCount++;
        break;
      case "i":
        vowelsCount++;
        break;
      case "o":
        vowelsCount++;
        break;
      case "u":
        vowelsCount++;
    }
  }

  return vowelsCount;
}
