let sonYearsOld = 26;
let dadYearsOld = 4;

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const twiceSonAge = sonYearsOld * 2;
  const yearsAgo = Math.abs(dadYearsOld - twiceSonAge);
  return yearsAgo;
}
