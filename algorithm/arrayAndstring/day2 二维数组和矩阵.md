二维数组的应用矩阵的遍历
LeetCode：[48. 旋转图像](https://leetcode.cn/problems/rotate-image/description/)
- 解法
	- 使用先对翻再沿着对角线翻转，再次转换即可
[[Drawing 2024-01-08 08.17.52.excalidraw]]

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// const matrix = [[1,2,3],[4,5,6],[7,8,9]];

var rotate = function (matrix) {
  // 竖直翻转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const maxJ = matrix[i].length - 1;
      if (j < maxJ - j) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[i][maxJ - j];
        matrix[i][maxJ - j] = temp;
      }
    }
  }

  // 对角线翻转
  for (let i = 0; i < matrix.length; i++) {
    const matrixRow = matrix.length - 1;
    for (let j = 0; j < matrix[i].length; j++) {
      const maxJ = matrix[i].length - 1;
      if (j < matrixRow - i) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[matrixRow - j][maxJ - i];
        matrix[matrixRow - j][maxJ - i] = temp;
      }
    }
  }
  return matrix;
};

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.warn(rotate(matrix));

```

- 先竖直翻转
	- 即每一行单独处理，关键点在判断条件 `j < maxJ - j`  即每一行做判断时，从左边开始找下标，和对应的右边下标比较，如果左边小于右边就对两个下标对应的值进行交换
- 再沿主对角线翻转
	- 这次处理的下标只处理主对角线上侧的对应的即可
	- 所以关键条件是 `j < matrixRow - i`  
- 由于是n * n的数组，所以 matrixRow 和 maxJ 一样大
	- 所以修改代码 maxJ 和 matrixRow 统一在代码function最开始计算，这样可以节省计算。