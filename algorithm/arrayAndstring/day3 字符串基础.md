
- **第3天：字符串基础**
    - 字符串的不可变性
    - 字符串常用操作
    - LeetCode：344. [反转字符串](https://leetcode.cn/problems/reverse-string/description/)
```javascript
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
```

- 比较简单，直接遍历，从头遍历到数组中间位置，找对应点数字，进行交换即可