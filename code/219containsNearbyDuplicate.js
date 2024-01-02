// leetcode: [219. 存在重复元素 II](https://leetcode.cn/problems/contains-duplicate-ii/)
/**
 * map 解法  key用num的值，value存储num在数组中对应的下标，计划当前下标和map中数据下标差值满足条件即可
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

/**
 * set 解法 固定set的size，如果没有重复就右移，删除最左边的值
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate2 = function (nums, k) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      set.delete(i - k - 1);
    }
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};
