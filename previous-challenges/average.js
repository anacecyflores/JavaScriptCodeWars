// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.
let grades = [70, 90, 100];

function getAverage(grades) {
  let finalGrade = 0;
  for (let i = 0; i < grades.length; i++) {
    finalGrade = finalGrade + grades[i];
  }
  let avg = finalGrade / grades.length;
  return Math.floor(avg);
}

console.log(getAverage(grades));
