// let underweight = 18.5;
// let normal = 25.0;
// let overweight = 30.0;
// let obese = 30.1;

let weight = 29;
let height = 2;

function bmi(weight, height) {
  if ((weight * height) / 2 <= 18.5 > 25) return "Underweight";
  if ((weight * height) / 2 <= 25 < 18.5) return "Normal";
  if ((weight * height) / 2 <= 30 > 25) return "Overweight";
  if ((weight * height) / 2 >= 30) return "Obese";
}

console.log(bmi(weight, height));
