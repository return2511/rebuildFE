/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// const matrix = [[1,2,3],[4,5,6],[7,8,9]];

var rotate = function (matrix) {
  const n = matrix.length;
  const matrixRow = n - 1;
  // 竖直翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < matrixRow - j) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[i][matrixRow - j];
        matrix[i][matrixRow - j] = temp;
      }
    }
  }

  // 对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < matrixRow - i) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[matrixRow - j][matrixRow - i];
        matrix[matrixRow - j][matrixRow - i] = temp;
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
