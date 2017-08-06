function isPrime(num) {
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  }
  let root = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= root; i ++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function nthPrime(nth) {
  let count = 1;
  let index = 1;
  while (count < nth) {
    index += 2;
    if (isPrime(index)) {
      count ++;
    }
  }
  return index;
}

console.log(nthPrime(10001));