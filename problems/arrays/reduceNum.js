/*
Problem: Sum of squares
Description:
  Given an array of numbers, return the sum of their squares.

I: an array of numbers
O: sum of their squares
C: none
E: none
*/

function reduceNum(numbers) {
  return numbers.map((num) => num * num).reduce((acc, num) => acc + num, []);
}

console.log(reduceNum([1, 2, 3, 4, 5, 6]));
