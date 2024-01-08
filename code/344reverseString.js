/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// ["h","e","l","l","o"]
var reverseString = function (s) {
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
  return s;
};

console.warn(reverseString(["h", "e", "l", "l", "o", "j"]));
