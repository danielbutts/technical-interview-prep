function fib(first, second, limit, evenSum) {
  const sum = first + second;
  
  // BASE CASE
  if (sum >= limit) {
    if (second % 2 === 0) {
      evenSum += second;
    }
  } else {
  // RECURSIVE CASE
    evenSum += fib(second, sum, limit, evenSum)
  }
  
  if (first % 2 === 0) {
    evenSum += first;
  }

  return evenSum;
}

console.log(fib(1,2,4000000,0));