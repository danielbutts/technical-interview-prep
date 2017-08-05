function isPrime(num) {
  if (num < 2) {
    return false;
  }
  let root = Math.round(Math.sqrt(num));
  let prime = true;
  if (root >= 2) {
    for (let i=2; i <= root; i++) {
      if (num % i === 0) {
        prime = false;
      }
    }
  }
  return prime;
}

function checkPrimeFactors(num) {
  let root = Math.round(Math.sqrt(num));
  if (root >= 2) {  
    for (let i = 2; i <= root; i++) {
      if (isPrime(i) && num % i === 0) {
        console.log(i);
      }
    }
  }
}

checkPrimeFactors(600851475143);
