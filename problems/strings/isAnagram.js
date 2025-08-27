/* ------------------------------------------------------
     Part 6 (Medium): isAnagram(a, b)
     Return true if a and b are anagrams (same letters, ignore case/spaces/punct.)
     "rail safety" vs "fairy tales" → true
     Hint search: mdn string replace (regex), mdn string toLowerCase, mdn array sort
  ------------------------------------------------------- */
function isAnagram(a, b) {
  // TODO: implement
  // const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
  // return clean(a) === clean(b);
  return undefined;
}
// ✅ Tests (uncomment after you implement)
// console.log("Part 6");
// console.assert(isAnagram("rail safety", "fairy tales") === true, "anagram true");
// console.assert(isAnagram("hello", "world") === false, "anagram false");
// console.assert(isAnagram("Dormitory", "Dirty room!") === true, "anagram with punct/space");
