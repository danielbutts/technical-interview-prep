function calculate(num) {
  let sum = 0;
  let squaredSum = 0;
  for (let i=1; i <= num; i++) {
    sum += i;
    squaredSum += i * i;
  }
  const diff = (sum * sum) - squaredSum;
  return diff;
}

console.log(calculate(100));
