/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  const setA = new Set(nums1);
  const setB = new Set(nums2);

  return [...new Set([...setA].filter((item) => setB.has(item)))];
};
