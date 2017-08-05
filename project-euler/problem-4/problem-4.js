function isPalindrome(num) {
  let numStr = num.toString()
  let revStr = numStr.split('').reverse().join('')
  return numStr === revStr;
}

function getLargestFactor(numArr) {
  let max;
  if (numArr.length > 0) {
    for (let i = 0; i < numArr.length; i++) {
      for (let j = 0; j < numArr.length; j++) {
        let factor = numArr[i] * numArr[j];
        if (isPalindrome(factor) && (max === undefined || factor > max)) {
          max = factor;
        }
      }
    }
  }
  return max;
}

function buildArray(min, max) {
  const numArr = [];
  for (let i = min; i <= max; i ++) {
    numArr.push(i);
  }
  return numArr;
}

let numArr = buildArray(100,999);
console.log(getLargestFactor(numArr));