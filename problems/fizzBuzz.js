/*
Problem: FizzBuzz
I: A number n
O: Print numbers from 1 to n,
   - "Fizz" for multiples of 3,
   - "Buzz" for multiples of 5,
   - "FizzBuzz" for multiples of both.
C: n >= 1
E: Small numbers (like n=1), multiples of 3/5 overlap

Approach:
1) Loop from 1 to n.
2) If divisible by 3 and 5 → "FizzBuzz"
3) Else if divisible by 3 → "Fizz"
4) Else if divisible by 5 → "Buzz"
5) Else → the number
Complexity: time O(n), space O(1)
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
