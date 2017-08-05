### Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2‐digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3‐digit numbers.

#### Solution 1: [problem-4.js](./problem-4.js)
* Time Complexity: O(n^2)? requires nested loop to calculate factors (reversing numStr is inconsequential because it's length will grow at 2/10 the rate of n). Could be improved by checking for palindrome outside of loops calculating factors, but would require additional space of 0(n^2) to store the factors. 
* Space Complexity: O(n) numArr grows linearly with the range of numbers (could be O(1) if passing a min/max instead of array)
