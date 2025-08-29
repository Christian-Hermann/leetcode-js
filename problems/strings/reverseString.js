/*
Problem: Reverse a string
I: str: string
O: string (reversed)
C: none
E: empty string should return ""
   single character should return itself

*/

function reverseString(str) {
  // use split to break into an array
  let chars = str.split("");
  // reverse the chars
  let reversed = chars.reverse();
  // return reversed with join
  return reversed.join("");
}

// ✅ Tests
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("racecar")); // "racecar"
console.log(reverseString("a")); // "a"
console.log(reverseString("")); // ""
