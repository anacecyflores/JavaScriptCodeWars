let haystack = ["hi", "bye", "haystack", "needle"];

function findNeedle(haystack) {
  // your code here
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}

console.log(findNeedle(haystack));
