console.log("Console test!");

for (let i = 0; i <= 20; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*
I: string
O: string reversed
C: NA
E: NA
*/

function reverseString(str) {
  let chars = str.split(""); // break the string into an array of characters
  let reversed = chars.reverse(); // reverse the array
  return reversed.join(""); // join the array back into a string
}
console.log(reverseString("hello"));

// Two Sum //
// given an array of integers nums and an integer target,
// return the indices of the two numbers that add up to target.
// Assume exactly one solution, and you can’t use the same element twice.
// ([2, 7, 11, 15], 9))

function twoSums(nums, target) {
  // create an empty hash map to remember numbers that we've seen
  // seen will store numbers we've seen as KEYS, and their indices as VALUES
  const seen = {};

  for (let i = 0; i < nums.legth; i++) {
    const value = nums[i]; // current number
    const need = target - value; // what number would complete the sum?

    // If we've seen the "need" before, return the pair of indices
    if (seen[need] !== undefined) {
      return [seen[need], i];
    }
    // Otherwise, record this number and its index
    seen[value] = i;
  }
  return []; // if no pair is found return empty array
}

// map arrow function exponents

const numbers = [1, 2, 3, 4];

const exponentialNumbers = numbers.map((number) => number * number);

console.log(exponentialNumbers);
