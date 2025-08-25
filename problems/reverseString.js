/*
Problem: Reverse a string
I: str: string
O: string (reversed)
C: none
E: empty string should return ""
   single character should return itself

Approach:
1) Split the string into an array of characters.
2) Reverse the array.
3) Join the array back into a string.
Complexity: time O(n), space O(n)
*/

function reverseString(str) {
  let chars = str.split(""); // Step 1
  let reversed = chars.reverse(); // Step 2
  return reversed.join(""); // Step 3
}

// ✅ Tests
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("racecar")); // "racecar"
console.log(reverseString("a")); // "a"
console.log(reverseString("")); // ""
