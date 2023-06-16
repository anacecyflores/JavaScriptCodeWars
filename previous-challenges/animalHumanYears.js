// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

let humanYears = 10;

var humanYearsCatYearsDogYears = function (humanYears) {
  let human = humanYears;
  let cat = 0;
  let dog = 0;
  // for one year
  if (humanYears === 1) {
    return [1, 15, 15];
  }
  // for two years
  if (humanYears === 2) {
    return [2, 24, 24];
  }
  // +=3 years
  else {
    let humanCat = (humanYears - 2) * 4;
    let humanDog = (humanYears - 2) * 5;
    let human = humanYears;
    let cat = 24 + humanCat;
    let dog = 24 + humanDog;
    return [human, cat, dog];
  }
};

console.log(humanYearsCatYearsDogYears(humanYears));