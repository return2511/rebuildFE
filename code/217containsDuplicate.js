// LeetCode：[217. 存在重复元素](https://leetcode-cn.com/problems/contains-duplicate/)
/**
 * 排序法
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

/**
 * hash法
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate2 = function (nums) {
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
