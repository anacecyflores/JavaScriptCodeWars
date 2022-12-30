// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
if (weight / Math.pow(height, 2) <= 18.5) {
  return "Underweight";
}
if (weight / Math.pow(height, 2) <= 25) {
  return "Normal";
}
if (weight / Math.pow(height, 2) <= 30) {
  return "Overweight";
}
if (weight / Math.pow(height, 2) > 30) {
  return "Obese";
}

// let underweight = 18.5;
// let normal = 25.0;
// let overweight = 30.0;
// let obese = 30.1;

console.log(bmi(weight, height));

function bmi(weight, height) {
  if ((weight * height) / 2 <= 18.5 > 25) return "Underweight";
  if ((weight * height) / 2 <= 25) return "Normal";
  if ((weight * height) / 2 <= 30 < 25) return "Overweight";
  if ((weight * height) / 2 >= 30) return "Obese";
}
let weight = 70;
let height = 250;
