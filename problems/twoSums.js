/*
Problem: Two Sum
I: nums: number[], target: number
O: number[] (indices of two numbers that sum to target)
C: Exactly one solution, don’t reuse the same element
E: Small arrays, negatives, target could be negative

Approach (hash map):
1) Make a map of previously seen numbers -> their index.
2) For each value at i:
   - need = target - value
   - if need exists in map, return [map[need], i]
   - else record value -> i in map
Complexity: time O(n), space O(n)
*/

export function twoSum(nums, target) {
  const seen = {}; // value -> index

  for (let i = 0; i < nums.length; i++) {
    // fixed .length
    const value = nums[i];
    const need = target - value;

    if (seen[need] !== undefined) {
      return [seen[need], i];
    }
    seen[value] = i;
  }
  return []; // per prompt there’s always one solution, but safe fallback
}

console.log(twoSum([2, 7, 11, 15], 9), "=> [0,1]");
console.log(twoSum([3, 2, 4], 6), "=> [1,2]");
console.log(twoSum([3, 3], 6), "=> [0,1]");
