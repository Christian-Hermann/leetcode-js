/*
Problem: Square each number in an array using map + arrow function
I: numbers: number[]
O: number[] (each number squared)
C: none
E: empty array should return empty array

*/

function mapArrow(numbers) {
  return numbers.map((num) => num * 2);
}

console.log(mapArrow([4, 6, 10]));

function filterNums(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
