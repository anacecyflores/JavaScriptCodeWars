const num = 9;
const summation = (num = 1) => {
  let res = 0;
  for (let i = 1; i <= num; i++) {
    res += i;
  }
  return res;
};
console.log(summation(num));
