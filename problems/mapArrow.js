/*
Problem: Square each number in an array using map + arrow function
I: numbers: number[]
O: number[] (each number squared)
C: none
E: empty array should return empty array

Approach:
1) Use Array.prototype.map to loop through each number.
2) For each element, return number * number.
3) Collect results into a new array.
Complexity: time O(n), space O(n)
*/

function squareNumbers(numbers) {
  return numbers.map((number) => number * number);
}

// Tests
console.log(squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(squareNumbers([])); // []
