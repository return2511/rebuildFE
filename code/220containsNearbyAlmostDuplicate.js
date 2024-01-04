/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  const list = [];

  for (let i = 0; i < nums.length; i++) {
    list.push(nums[i]);
    if (list.length > indexDiff + 1) {
      list.shift();
    }

    if (existsPairWithSmallDifference(list, valueDiff)) return true;
  }
  return false;
};

function existsPairWithSmallDifference(arr, k) {
  const data = [...arr];
  data.sort((a, b) => a - b); // 对数组进行排序
  let left = 0;
  let right = 1;

  while (right < data.length) {
    let diff = Math.abs(data[right] - data[left]);
    // console.warn("difffff", right, diff);

    if (diff <= k) {
      return true; // 找到满足条件的数对
    } else {
      left++; // 增加左指针以减小差值
    }

    if (left == right) {
      // 确保两个指针不重合
      right++;
    }
  }

  return false; // 没有找到满足条件的数对
}
// timeout
// function existsPairWithSmallDifference(arr, k) {
//   let seen = new Set();
//   for (let num of arr) {
//     for (let i = -k; i <= k; i++) {
//       if (seen.has(num + i)) {
//         return true;
//       }
//     }
//     seen.add(num);
//   }
//   return false;
// }

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));

// btn 上面超时了 官方桶排序算法，直呼牛逼
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const n = nums.length;
  const mp = new Map();
  for (let i = 0; i < n; ++i) {
    const x = nums[i];
    const id = getID(x, t + 1);
    if (mp.has(id)) {
      return true;
    }
    if (mp.has(id - 1) && Math.abs(x - mp.get(id - 1)) <= t) {
      return true;
    }
    if (mp.has(id + 1) && Math.abs(x - mp.get(id + 1)) <= t) {
      return true;
    }
    mp.set(id, x);
    if (i >= k) {
      mp.delete(getID(nums[i - k], t + 1));
    }
  }
  return false;
};

const getID = (x, w) => {
  return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
};
