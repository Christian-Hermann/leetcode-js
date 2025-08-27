/* --------------------------------
     Part 2 (Easy): sumArray(arr)
     Return the sum of all numbers.
     Edge: [] → 0
     Hint search: mdn array forEach
  ---------------------------------- */
function sumArray(arr) {
  // TODO: implement
  let total = 0;
  arr.forEach((item) => {
    total += item;
  });
  return total;
}
// ✅ Tests (uncomment after you implement)
// console.log("Part 2");
// console.log(sumArray([1, 2, 3]) === 6, "sumArray([1,2,3]) → 6");
// console.assert(sumArray([]) === 0, "sumArray([]) → 0");
// console.assert(sumArray([-2,2,5]) === 5, "sumArray([-2,2,5]) → 5");
