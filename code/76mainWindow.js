/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s 和 t 由英文字母组成
// 进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
var minWindow = function (s, t) {
  // const set = new Set(t);
  const obj = new Map();
  for (var i = 0; i < t.length; i++) {
    if (!obj[t[i]]) {
      obj[t[i]] = 1;
    }
  }

  // for
  console.warn(obj);
};

minWindow("", "abca");
