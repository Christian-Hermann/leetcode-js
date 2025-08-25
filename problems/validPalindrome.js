/*
Problem: Valid Palindrome
Description:
  Given a string, determine if it reads the same forward and backward.
  Only consider alphanumeric characters and ignore case.

I: str: string
O: boolean (true if palindrome, false otherwise)
C: 1 <= str.length <= 2 * 10^5
E: empty string "" → true
   "A man, a plan, a canal: Panama" → true
   "race a car" → false

Approach:
1) Convert to lowercase.
2) Remove non-alphanumeric characters.
3) Reverse string and compare to original.

Complexity:
  Time: O(n)
  Space: O(n)
*/

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

// ✅ Tests
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true
