/*
Problem: Valid Parentheses
Description:
  Given a string of '()[]{}', return true if every opener has a correct closer in order.

I: 
O: 
C: 
E: 

*/

function isValid(s) {
  const match = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      const top = stack.pop();
      if (top !== match[ch]) return false;
    }
  }
  return stack.length === 0;
}

// ✅ Tests
console.assert(isValid("()") === true, "()");
console.assert(isValid("()[]{}") === true, "all");
console.assert(isValid("(]") === false, "(]");
console.assert(isValid("([)]") === false, "crossed");
console.assert(isValid("{[]}") === true, "{[]}");
