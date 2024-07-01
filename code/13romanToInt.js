// 解法：遍历字符串，从右向左，依次取出字符，根据字符的罗马数字值，判断是否需要减去或加上该值，并累加或减去该值，最后返回累加或减去的结果。
// 当左边值小于右边时，需要减去该值；否则，需要加上该值。
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = romanMap[s[i]];
    if (curr < prev) {
      result -= curr;
    } else {
      result += curr;
    }
    prev = curr;
  }
  return result;
};
