/*
Problem: Contains Duplicate
Description:
  Given an integer array nums, return true if any value appears at least twice
  in the array, and return false if every element is distinct.

I: nums: number[]
O: boolean
C: n can be 0 or more
E:
  - [] → false
  - [1] → false
  - [1,1] → true
  - negatives and zeros mixed

Approach:
1) Create an empty Set called seen.
2) For each number:
   - If seen.has(number) → return true.
   - Else add number to seen.
3) If loop finishes, return false.
*/

function containsDuplicate(nums) {
  const seen = new Set();
  for (let n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}

// ✅ Tests
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([])); // false
console.log(containsDuplicate([0, -1, 2, -1])); // true
