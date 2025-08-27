/*
Problem: Two Sum
Description:
  Given an array of integers `nums` and an integer `target`, return the indices
  of the two numbers such that they add up to `target`.
  - You may assume exactly one valid solution exists.
  - You may not use the same element twice.
  - Return the indices in any order.

I: nums: number[], target: number
O: number[] (indices of two numbers that sum to target)
C: Exactly one solution, don’t reuse the same element
E: Small arrays, negatives, target could be negative

*/

export function twoSum(nums, target) {
  const seen = {}; // create empty hash map

  for (let i = 0; i < nums.length; i++) {
    // value is current number, target is number we are looking for
    const value = nums[i];
    const need = target - value;
    // if need exists in seen return indices of partner and current number
    if (seen[need] !== undefined) {
      return [seen[need], i];
    }
    // if not store value in seen with its index
    seen[value] = i;
  }
  return []; // fallback, if no pair found
}

console.log(twoSum([2, 7, 11, 15], 9), "=> [0,1]");
console.log(twoSum([3, 2, 4], 6), "=> [1,2]");
console.log(twoSum([3, 3], 6), "=> [0,1]");
