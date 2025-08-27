/* ---------------------------
   Part 1 (Easy): sumToN(n)
   Return 1 + 2 + ... + n
   Edge cases: n <= 0 → return 0
---------------------------- */
function sumToN(n) {
  if (n <= 0) return 0;
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// ✅ Tests (uncomment to check)
// console.log("Part 1");
// console.assert(sumToN(1) === 1, "sumToN(1) should be 1");
// console.assert(sumToN(5) === 15, "sumToN(5) should be 15");
// console.assert(sumToN(0) === 0, "sumToN(0) should be 0");
