// 16. 最接近的三数之和  先排序，再双指针解法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 不能直接用sort排序，sort排序默认是比较字符串，如果有负数，比如-1和-4会认为 -1 < -4 ，导致结果错误
  const list = nums.sort((a, b) => a - b);
  let closestNum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < list.length - 2; i++) {
    let left = i + 1;
    let right = list.length - 1;
    if (i > 0 && list[i] === list[i - 1]) continue; // 跳过重复元素
    while (left < right) {
      const sum = list[i] + list[left] + list[right];
      if (sum === target) {
        return target;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
      // 更新closestNum
      if (Math.abs(sum - target) < Math.abs(closestNum - target)) {
        closestNum = sum;
      }
    }
  }
  return closestNum;
};

const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target)); // Output: 2
