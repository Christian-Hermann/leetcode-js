/*
Problem: Valid Anagram (ignore case/spaces/punctuation)
Description:
  Return true if strings a and b are anagrams of each other after:
  - lowercasing
  - removing non-alphanumeric characters

I: 
O: 
C: 
E: 

Approach:
1) Clean both strings (lowercase, remove non-alphanumerics).
2) Count characters from a in a map.
3) Walk b, decrement counts; if a char missing/negative → false.
4) If all good → true.
*/

function isAnagram(a, b) {
  const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const s1 = clean(a),
    s2 = clean(b);
  if (s1.length !== s2.length) return false;

  const count = {};
  for (let i = 0; i < s1.length; i++) {
    const ch = s1[i];
    count[ch] = (count[ch] || 0) + 1;
  }
  for (let i = 0; i < s2.length; i++) {
    const ch = s2[i];
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}

// ✅ Tests
console.assert(isAnagram("rail safety", "fairy tales") === true, "true");
console.assert(isAnagram("Dormitory", "Dirty room!") === true, "true");
console.assert(isAnagram("hello", "world") === false, "false");
console.assert(isAnagram("", "") === true, "empty true");
