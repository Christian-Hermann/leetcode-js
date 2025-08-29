/* ---------------------------------------
     Part 3 (Easy): maxInArray(arr)
     Return the largest number in arr.
     Edge: [] → null
     Hint search: mdn Math.max (but try a loop first)
  ---------------------------------------- */
function maxInArray(arr) {
  // TODO: implement
  // check if length is zero, return null if so
  if (arr.length === 0) {
    return null;
  }
  // set max to first index in array
  let max = arr[0];
  // loop though array
  for (let i = 1; i < arr.length; i++) {
    // if arr[i] is greater than max set the new max
    if (arr[i] > max) {
      max = arr[i];
    }
    // return max
    return max;
  }
}
// ✅ Tests
// console.log("Part 3");
// console.log(maxInArray([1, 5, 3]) === 5, "maxInArray([1,5,3]) → 5");
// console.assert(maxInArray([-10,-3,-20]) === -3, "maxInArray([-10,-3,-20]) → -3");
// console.assert(maxInArray([]) === null, "maxInArray([]) → null");
