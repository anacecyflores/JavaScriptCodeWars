function findAverage(array) {
  if (array == 0) {
    return 0;
  }
  if (array == []) {
    return 0;
  }
  if (array == NaN) {
    return +0;
  }
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial / array.length;
}
