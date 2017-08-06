function isDivisible(num, div) {
  return (num % div === 0);
}

function checkAllDivisible(num, divMax) {
  for (let i = divMax; i > 0; i --) {
    if (num % i !== 0) {
      return false;
    }
  }
  return true;
}

function findMinimumDivisbile(divMax) {
  let done = false;
  let num = 0;
  while (!done) {
    num += divMax;
    done = checkAllDivisible(num, divMax);
  }
  return num;
}

console.log(findMinimumDivisbile(20));