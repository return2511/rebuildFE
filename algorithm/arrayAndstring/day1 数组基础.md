
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

上述使用Set 来实现hash

#### js的Set有哪些基础方法

JavaScript 的 `Set` 对象是一个构造函数，用于创建含有唯一值的集合。这些值可以是任何类型。`Set` 提供了以下基础方法：

1. `add(value)`: 向 `Set` 中添加一个新元素。如果该元素已经存在于 `Set` 中，则不会添加重复的元素。
2. `delete(value)`: 从 `Set` 中删除一个元素。如果该元素存在于 `Set` 中，删除它并返回 `true`；否则返回 `false`。
3. `has(value)`: 检查 `Set` 中是否存在一个指定的值。如果该值存在，返回 `true`；否则返回 `false`。
4. `clear()`: 清空 `Set` 中的所有元素。
5. `forEach(callbackFn, thisArg)`: 对 `Set` 中的每个元素执行提供的回调函数。`thisArg` 参数（可选）在回调函数中作为 `this` 的值。
6. `values()`: 返回一个新的迭代器对象，它包含 `Set` 对象中每个元素的值。
7. `keys()`: 由于 `Set` 是一组值的集合，所以 `keys()` 方法的行为与 `values()` 方法相同。
8. `entries()`: 返回一个新的迭代器对象，它包含 `[value, value]` 对，用于每个元素的值。这个方法存在是为了使 `Set` 对象与 `Map` 对象保持接口一致。

除了这些方法，`Set` 对象也支持 `size` 属性，用于获取 `Set` 中元素的数量。

#### Set通常有哪些用法，用hash算法时是用普通对象还是Set

JavaScript 的 `Set` 对象通常用于存储唯一值的集合。这使得它在某些特定场景下非常有用。以下是一些常见的 `Set` 使用场景：

1. **去重**: 利用 `Set` 只能存储唯一值的特性，可以很方便地从数组中移除重复元素。

   ```javascript
   const array = [1, 2, 2, 3, 4, 4, 5];
   const uniqueArray = [...new Set(array)];
   ```
2. **值的存在性检查**: `Set` 的 `has` 方法提供了一种比数组更高效的方式来检查元素是否存在于集合中，尤其是在大型集合中。
3. **并集、交集、差集操作**: 可以利用 `Set` 进行数组或集合的并集、交集和差集运算。
4. **数据存储**: 当需要存储不重复的值时（如标签、关键词等），使用 `Set` 比数组更为适宜。
关于使用普通对象还是 `Set` 进行哈希操作的问题，这取决于具体场景：
- **使用普通对象**:
  - 当需要存储键值对时，且键是字符串或符号。
  - 当需要在哈希结构中包含额外的数据或方法。
- **使用 `Set`**:
  - 当只关心值的唯一性，不需要映射键到值。
  - 当需要高效地进行存在性检查、添加和删除操作。
  - 当利用 `Set` 提供的迭代器和方法可以简化代码。

在许多情况下，`Set` 提供了比普通对象更适合处理唯一值集合的接口和性能优势。然而，如果你的应用场景需要键值对映射或额外的灵活性，那么使用普通对象或者 `Map` 可能更为合适。

####  `Set` 如何进行数组或集合的并集、交集和差集运算
`Set` 对象可以用来进行数组或集合的并集、交集和差集运算。下面是如何使用 `Set` 来执行这些操作的示例：

##### 并集 (Union)

并集可以通过合并两个数组或集合中的所有元素来获得，然后使用 `Set` 来确保所有值都是唯一的。

```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([4, 3, 2]);

const union = new Set([...setA, ...setB]);
// union: Set {1, 2, 3, 4}
```

##### 交集 (Intersection)

交集是两个数组或集合中共同的元素。可以通过筛选一个集合中的元素，仅保留存在于另一个集合中的元素来获得。

```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([4, 3, 2]);

const intersection = new Set([...setA].filter(x => setB.has(x)));
// intersection: Set {2, 3}
```

##### 差集 (Difference)

差集是存在于一个集合但不在另一个集合中的元素。可以通过从一个集合中过滤掉存在于另一个集合中的元素来得到。

```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([4, 3, 2]);

const difference = new Set([...setA].filter(x => !setB.has(x)));
// difference: Set {1}
```

这些操作对于处理集合数据时非常有用，特别是在需要对数据进行快速去重或者查找共有/独有元素时。利用 `Set` 的特性，这些运算既高效又易于实现。
