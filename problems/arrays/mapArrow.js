/*
Problem: Square each number in an array using map + arrow function
I: numbers: number[]
O: number[] (each number squared)
C: none
E: empty array should return empty array

*/

function squareNumbers(numbers) {
  return numbers.map((number) => number * number);
}

// Tests
console.log(squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(squareNumbers([])); // []
