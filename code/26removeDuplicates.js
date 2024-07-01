/**
 * @param {number[]} nums
 * @return {number}
 */
// 从头开始遍历数组，遇到重复的数字就跳过，不重复的数字就放到数组的后面，最后返回数组的长度
var removeDuplicates = function (nums) {
  let sum = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] !== nums[sum]) {
      sum += 1;
      nums[sum] = nums[i];
    }
  }
  return sum + 1;
};

// gpt解法
/**
 * 解析
	•	双指针技术：i 是快指针，负责探索数组的前端；j 是慢指针，指向下一个没有重复的元素应该放置的位置。
	•	原地修改：通过简单地将元素移动到前面的位置，我们避免了使用额外的空间，符合题目要求的 O(1) 空间复杂度。
	•	时间复杂度：O(n)，其中 n 是数组的长度，因为我们只需遍历一次数组。
	•	空间复杂度：O(1)，因为没有使用额外的空间来存储数据。
 */

function removeDuplicates(nums) {
  let j = 1; // `j` 是慢指针，`i` 是快指针
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[j - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}

console.log(removeDuplicates([1, 1, 2]));
