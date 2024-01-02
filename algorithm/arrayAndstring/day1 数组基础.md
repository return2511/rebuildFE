
LeetCode：[217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)

## 题目内容

给你一个整数数组 `nums` 。如果任一值在数组中出现 **至少两次** ，返回 `true` ；如果数组中每个元素互不相同，返回 `false` 。

**示例 1：**

**输入：** nums = [1,2,3,1]
**输出：** true

**示例 2：**

**输入：** nums = [1,2,3,4]
**输出：** false

**示例 3：**

**输入：** nums = [1,1,1,3,3,4,3,2,4,2]
**输出：** true

**提示：**
- `1 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`

## 解题思路
### 排序法

> 对数组从小到大进行排序，如果相挨在一起的两个数字相等，说明数组中存在两个相等的数字

时间复杂度：$\ N*log(N)$
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const list = nums.sort();
  for (let i = 1; i < list.length; i++) {
    if (list[i] === list[i - 1]) {
      return true;
    }
  }
  return false;
};
```

- 代码没什么好解释的，比较简单，从第二个数开始遍历，每次和前一个对比，相同时 返回true，如果遍历完整个数组都不相同就是 false
- 时间复杂度都在sort这块
![[Pasted image 20240102225421.png]]

### hash算法
- js中的hash可以直接使用set来实现
```javascript
/**
 * hash法
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};
```
![[Pasted image 20240102225546.png]]

