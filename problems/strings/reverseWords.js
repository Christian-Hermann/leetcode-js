/* -------------------------------------------------------
     Part 5 (Medium-): reverseWords(sentence)
     Return the words in reverse order (by spaces).
     "hi there world" → "world there hi"
     Edge: extra spaces → trim & collapse to single spaces
     Hint search: mdn string trim, mdn string split, mdn array reverse, mdn array join
  -------------------------------------------------------- */
/*
I: a string of words
O: a string of the same input words but reversed
C: NA
E: extra spaces
*/

function reverseWords(sentence) {
  // use trim and split with regex to get rid of the white space and split into an array
  words = sentence.trim().split(/\s+/);
  // reverse words and re-join to an array
  return words.reverse().join(" ");
}

// ✅ Tests
// console.log("Part 5");
// console.assert(reverseWords("hi there world") === "world there hi","reverseWords basic");
// console.assert(reverseWords("  a   b  c  ") === "c b a", "reverseWords trims/collapses");
