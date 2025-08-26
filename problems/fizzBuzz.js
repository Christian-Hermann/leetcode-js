/*
Problem: FizzBuzz
Description:
  Given an integer n, print the numbers from 1 to n (inclusive) with these rules:
    - If a number is divisible by both 3 and 5, print "FizzBuzz"
    - If divisible by 3 (but not 5), print "Fizz"
    - If divisible by 5 (but not 3), print "Buzz"
    - Otherwise, print the number itself

I: A number n
O: Print numbers from 1 to n,
   - "Fizz" for multiples of 3,
   - "Buzz" for multiples of 5,
   - "FizzBuzz" for multiples of both.
C: n >= 1
E: Small numbers (like n=1), multiples of 3/5 overlap

*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Test
fizzBuzz(20);
