function isPalindrome(num) {
  let numStr = num.toString()
  let revStr = numStr.split('').reverse().join('')
  return numStr === revStr;
}

function getFactors(numArr) {
  let factors = [];
  if (numArr.length > 0) {
    for (let i = 0; i < numArr.length; i++) {
      for (let j = 0; j < numArr.length; j++) {
        factors.push(numArr[i] * numArr[j]);
      }
    }
  }
  return factors;
}

function buildArray(min, max) {
  const numArr = [];
  for (let i = min; i <= max; i ++) {
    numArr.push(i);
  }
  return numArr;
}

function findMaxPalindrome(factors) {
  let max;
  factors.forEach((factor) => {
    if (isPalindrome(factor) && (max === undefined || factor > max)) {
      max = factor;
    }
  });
  return max;
}

let numArr = buildArray(100,999);
let factors = getFactors(numArr);
console.log(findMaxPalindrome(factors));